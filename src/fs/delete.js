import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);

const remove = async () => {
    try {
        await fs.rm(path.join(__dirname, "files", "fileToRemove.txt"))
    } catch {
        throw new Error("FS operation failed");
    } 
};

await remove();