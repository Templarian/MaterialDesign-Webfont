const fs = require("fs");
const rimrafSync = require("rimraf").sync;

rimrafSync("./docs");

fs.readdirSync(".").forEach((file) => {
  if (file.startsWith("fontello-")) {
    fs.renameSync(file, "docs");
    fs.renameSync("docs/demo.html", "docs/index.html");
  }
});
