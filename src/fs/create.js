import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
    try {
        await fs.writeFile(pathToFile, "I am fresh and young", { flag: "wx" })
    } catch {
        throw new Error("FS operation failed");
    }
};

await create();