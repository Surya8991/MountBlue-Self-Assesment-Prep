// https://www.hackerrank.com/contests/mountblue-technologies/challenges/gem-stones
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    let gemStoneSet = new Set(arr[0]);

    for (let gemstone of arr) {
        gemStoneSet.forEach(element => {
            if (!gemstone.includes(element)) {
                gemStoneSet.delete(element);
            }
        });
    }

    return gemStoneSet.size;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    const result = gemstones(arr);

    ws.write(result + '\n');

    ws.end();
}
