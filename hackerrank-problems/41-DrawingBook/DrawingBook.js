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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    
    const fontValue = Math.ceil((p - 1)/2);
    const bottomValue = Math.floor((n-p)/2);
    let result =0;
    

    if((n-p) == 1){
        if(p <= 1){
            return 0;
        }
        if( p % 2 == 0){
           return 0 ;
        }else{
            return 1;
        }        
    }
    
    
    
    if(fontValue < bottomValue){
        result = fontValue;    
    }else{
        result = bottomValue;
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
