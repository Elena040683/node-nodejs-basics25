import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);

const read = async () => {
    try {
        const printToConsole = await fs.readFile(path.join(__dirname, "files", "fileToRead.txt"), "utf-8");
        console.log(printToConsole);
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();