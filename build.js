import fs from 'fs';
import PATH from 'path';

const target_path = "dist/p5-python-web.js"
const source_paths = [
   "src/skulptSetup.js",
   "lib/skulpt.min.js",
   "lib/skulpt-stdlib.js",
];

console.log("load:", source_paths);
const files = await Promise.all(source_paths.map(path => fs.promises.readFile(path, { encoding: "utf-8" })));

console.log("write:", source_paths, "to:", target_path);
const concat_files = files.join("\n");
fs.writeFileSync(target_path, concat_files);

console.log("DONE!")