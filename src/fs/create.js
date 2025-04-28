import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getFilenameFromUrl = fileURLToPath;
const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));

const _dirname = getDirnameFromUrl(import.meta.url);
const pathToFile = path.join(_dirname, "files", "fresh.txt");

const create = async () => {
    try {
        await fs.writeFile(pathToFile, "I am fresh and young", { flag: "wx" })
    } catch {
        throw new Error("FS operation failed");
    }
};

await create();