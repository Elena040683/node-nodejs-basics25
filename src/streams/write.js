import {createWriteStream} from 'fs';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const writeStream = createWriteStream(pathToFile);

const write = async () => {
    process.stdin.pipe(writeStream);
};

await write();