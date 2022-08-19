import { Asset, Data } from "../types.ts";

export default async function () {
  // Getting the data
  const manifest = await fetch(
    "https://launchermeta.mojang.com/mc/game/version_manifest.json",
  );
  const manifestJSON: Data = await manifest.json();

  // Getting the latest version whereas type is release
  const latest = manifestJSON.versions.find((version) =>
    version.type == "release"
  );
  const data = await fetch(latest!.url);
  const dataJSON: Asset = await data.json();

  // Return the found result
  return dataJSON.downloads.server.url;
}
