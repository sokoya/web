// @/server.js
import fs from "fs";
import path from "path";

import { createApp, eventHandler } from "h3";
import { createServer as createViteServer } from "vite";
import { listen } from "listhen";
import sirv from "sirv";

const DEV_ENV = "development";

const bootstrap = async () => {
  const app = createApp();
  let vite;

  if (process.env.NODE_ENV === DEV_ENV) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);
  } else {
    app.use(sirv("dist/client", {
        gzip: true,
      })
    );
  }

  app.use("*",eventHandler(async (req, res, next) => {
    const url = req.originalUrl;
    let template, render;


      if (process.env.NODE_ENV === DEV_ENV) {
        template = fs.readFileSync(path.resolve("./index.html"), "utf-8");

        template = await vite.transformIndexHtml(url, template);

        render = (await vite.ssrLoadModule("/src/main.tsx")).render;
      } else {
        template = fs.readFileSync(
          path.resolve("dist/client/index.html"),
          "utf-8"
        );
        render = (await import("./dist/server/server.js")).render;
      }

      const appHtml = await render({ path: url });

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html").end(html);
    
  }));

  return { app };
};

bootstrap()
  .then(eventHandler(async ({app}) => {
    await listen(app, { port: 3333 });
  }));
