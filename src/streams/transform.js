import {pipeline, Transform} from "stream";

const reverse = new Transform({
    transform (chunk, _, callback) {
        const string = chunk.toString().trim();
        const reversedString = string.split('').reverse().join('');
        callback(null, reversedString + "\n");
    }
});

const cliInput = process.stdin;
const cliOutput = process.stdout;

const transform = async () => {
    pipeline(cliInput, reverse, cliOutput,  (err) => console.log(err));
    // cliInput.pipe(reverse).pipe(cliOutput);
};

await transform();