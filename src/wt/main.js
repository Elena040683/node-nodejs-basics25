import { Worker } from "worker_threads";
import {cpus} from "os";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));
const __dirname = getDirnameFromUrl(import.meta.url);
const workerScript = path.join(__dirname, "worker.js");

const START_NUMBER = 10;

const fibonacciWorkerService = (number) => new Promise(resolve => {
    const worker = new Worker(workerScript, {workerData: number})

    worker.on('message', data => resolve({
        status: "resolved",
        data
    }));

    worker.on('error', () => resolve({
        status: "error",
        data: null
    }));
})

 const performCalculations = async () => {
    const workersPool = Array.from({length: cpus().length}, (_, n) => fibonacciWorkerService(START_NUMBER + n));
    const result = await Promise.all(workersPool);
    console.log(result);
};

performCalculations();