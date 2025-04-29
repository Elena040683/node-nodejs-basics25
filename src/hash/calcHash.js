import { readFile } from "fs/promises";
import {createHash} from "crypto";
import path from "path";

import { dirname } from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const text = await readFile(pathToFile);
    const hash = createHash('sha256').update(text).digest('hex');
    console.log(hash);
};

await calculateHash();