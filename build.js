import fs from 'fs';
import PATH from 'path';

const target_path = "dist/p5-python-web.js"
const source_paths = [
   "lib/skulpt.min.js",
   "lib/skulpt-stdlib.js",
   "src/skulptSetup.js",
];

console.log("create or truncate:", target_path);
fs.writeFileSync(target_path, ""); // create file if it doesn't exist or truncate if it does

console.log("load:", source_paths);
const files = await Promise.all(source_paths.map(path => fs.promises.readFile(path)));

console.log("write:", source_paths, "to:", target_path);
files.forEach(file => fs.writeFileSync(target_path, file, { flag: 'a+' }));

console.log("DONE!")