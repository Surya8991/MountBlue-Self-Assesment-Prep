// https://www.hackerrank.com/contests/mountblue-technologies/challenges/funny-string
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
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

/* 
Method :1. Reverse s String 
2. check if Abs Value of revS and s is same print Funny else Print not Funny
*/
function funnyString(s) {
    // Write your code here
    let revS = s.split('').reverse().join('')
    for (let i = 1; i < s.length; i++) {
        let dif1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1))
        let dif2 = Math.abs(revS.charCodeAt(i) - revS.charCodeAt(i - 1))

        if (dif1 !== dif2) {
            return "Not Funny"
        }
    }
    return 'Funny'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
