import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const _dirname = getDirnameFromUrl(import.meta.url);
const sourceDir = path.join(_dirname, "files");
const targetDir = path.join(_dirname, "files_copy");

const copy = async () => {
    try{
        await fs.cp(sourceDir, targetDir, {recursive: true, force: false})
    } catch {
        throw new Error("FS operation failed");
    }
}
await copy();
