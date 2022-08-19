import { blue, serve } from "./deps.ts";
import latest from "./middleware/latest.ts";
import version from "./middleware/version.ts";
import list from "./middleware/list.ts";

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
      case "/scripter":
        return Response.redirect(
          "https://raw.githubusercontent.com/uwucraft/scripter/main/install.sh",
          302,
        );
      case "/version":
        return url.searchParams.has("v")
          ? Response.redirect(
            await version(url.searchParams.get("v") as string),
          )
          : new Response("Missing 'v' param!", { status: 400 });
      case "/latest":
        return Response.redirect(await latest(), 302);
      case "/list":
        return new Response(JSON.stringify(await list()), {
          headers: { "content-type": "application/json" },
        });
      default:
        return Response.redirect("https://github.com/uwucraft/pwease", 302);
    }
  });
};

await launch();
