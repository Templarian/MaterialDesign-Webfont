const rimrafSync = require("rimraf").sync;
const fs = require("fs");
const path = require("path");
const config = require("./config.json");

rimrafSync("./css");

let iconsF = fs.createWriteStream(
  path.join(__dirname, "scss", "_var-icons.scss")
);
iconsF.write("$adi-icons: (\n");
config.glyphs.forEach((item) => {
  iconsF.write(`     "${item.css}": ${item.code.toString(16)},\n`);
});
iconsF.write(");\n");
