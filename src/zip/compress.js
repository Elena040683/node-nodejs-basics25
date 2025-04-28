import {createGzip} from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);
const sourceFile = path.join(__dirname, "files", "fileToCompress.txt");
const zipFile = path.join(__dirname, "files", "archive.gz");

const sourceFileStream = createReadStream(sourceFile);
const zipStream = createGzip();
const zipFileStream = createWriteStream(zipFile);

const compress = async () => {
    pipeline(sourceFileStream, zipStream, zipFileStream, (err) => console.log(err))
};

await compress();