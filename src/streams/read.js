import {createReadStream, ReadStream} from 'fs';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const readStream = createReadStream(pathToFile);

const read = async () => {
    readStream.pipe(process.stdout);
};

await read();