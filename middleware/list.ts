import { Asset, Data } from "../types.ts";

export default async function () {
  // Getting the data
  const manifest = await fetch(
    "https://launchermeta.mojang.com/mc/game/version_manifest.json",
  );
  const manifestJSON: Data = await manifest.json();

  // Getting the latest version whereas type is release
  const list = manifestJSON.versions.map((version) => version.id);

  // Return the found result
  return list;
}
