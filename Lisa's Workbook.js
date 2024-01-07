'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    let pageNumber = 0;
    let amountOfSpecialProblems = 0;
    for (let i = 1; i <= n; i++) {
        pageNumber++;
        for (let j = 1; j <= arr[i - 1]; j++) {
            if (j === pageNumber) {
                amountOfSpecialProblems++;
            }
            if (j % k === 0 && (j !== arr[i - 1])) {
                pageNumber++;
            }
        }
    }
    return amountOfSpecialProblems;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = workbook(n, k, arr);

    ws.write(result + '\n');

    ws.end();
}
