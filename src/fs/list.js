import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);

const list = async () => {
    try {
        const fileList = await fs.readdir(path.join(__dirname, "files"));
        console.log(fileList);
    } catch {
        throw new Error("FS operation failed");
    }
};

await list();