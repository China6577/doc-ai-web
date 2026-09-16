const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

async function prerender() {
  const serverPath = path.resolve(__dirname, "dist/server/entry-server.js");
  const indexPath = path.resolve(__dirname, "dist/index.html");
  const outputPath = path.resolve(__dirname, "dist/index.html");

  if (!fs.existsSync(serverPath)) {
    throw new Error(`SSR bundle not found at ${serverPath}. Run "npm run build:ssr" first.`);
  }

  const { render } = await import(pathToFileURL(serverPath).href);
  const { html } = render();

  const template = fs.readFileSync(indexPath, "utf-8");
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );

  fs.writeFileSync(outputPath, finalHtml);

  // SSR bundle is no longer needed for the static deployment.
  const ssrDir = path.resolve(__dirname, "dist/server");
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log("Prerendered index.html with static content.");
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
