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
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */




function makingAnagrams(s1, s2) {
    // Write your code here
    let map = {}, firstStrCount = 0, secondStrCount = 0, result = 0;

    for (let item of s1) {
        map[item] = ++map[item] || 1
    }


    for (let item1 of s2) {
        if (map[item1]) {
            firstStrCount += 1;
            map[item1] -= 1;
        } else {
            secondStrCount += 1;
        }
    }


    result = ((s1.length - firstStrCount) + secondStrCount);

    return result;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = makingAnagrams(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
