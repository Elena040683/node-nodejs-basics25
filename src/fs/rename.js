import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);

const rename = async () => {
    try {
        await fs.rename(path.join(__dirname, "files", "wrongFilename.txt"), path.join(__dirname, "files", "properFilename.md"))
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();