import {createGunzip} from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);
const sourceFile = path.join(__dirname, "files", "archive.gz");
const unzipFile = path.join(__dirname, "files", "fileToCompress.txt");

const sourceFileStream = createReadStream(sourceFile);
const unzipStream = createGunzip();
const unzipFileStream = createWriteStream(unzipFile);

const decompress = async () => {
    pipeline(sourceFileStream, unzipStream, unzipFileStream, (err) => console.log(err))
};

await decompress();