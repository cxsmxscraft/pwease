import { Asset, Data } from "../types.ts";

export default async function (v: string) {
  // Getting the data
  const manifest = await fetch(
    "https://launchermeta.mojang.com/mc/game/version_manifest.json",
  );
  const manifestJSON: Data = await manifest.json();

  // Getting the latest version whereas type is release
  const found = manifestJSON.versions.find((version) => version.id === v);
  const data = await fetch(found!.url);
  const dataJSON: Asset = await data.json();

  // Return the found result
  return dataJSON.downloads.server.url;
}
