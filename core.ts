import { blue, serve } from "./deps.ts";
import type {Asset, Data} from "./types.ts";

export const launch = async () => {
  await console.log(blue("[INFO]"), `Serverless request handling...`);
  await serve(async (req) => {
    const url = new URL(req.url);

    if (req.method == "POST") {
      switch (url.pathname) {
        case "/some":
          return new Response("Alright, I got it");
        default:
          return new Response("What you're trying to post?");
      }
    }

    switch (url.pathname) {
      case "/latest":
        // Getting the data
        const manifest = await fetch("https://launchermeta.mojang.com/mc/game/version_manifest.json");
        const manifestJSON: Data = await manifest.json();

        // Getting the latest version whereas type is release
        const latest = manifestJSON.versions.find((version) => version.type == "release");
        const data = await fetch(latest!.url);
        const dataJSON: Asset = await data.json();

        return Response.redirect(dataJSON.downloads.server.url,302);
      default:
        return Response.redirect("https://github.com/uwucraft/pwease", 302);
    }
  });
};

await launch();
