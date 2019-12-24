// include file system module
const fs = require('fs')

// return text buffer
var myBuf = fs.readFileSync(process.argv[2]);

// to String data
var str = myBuf.toString();

// split the string into an array
var myArray = str.split('\n');

// count the number of lines minus the last 1.
var result = myArray.length -1;

// log the result in the console.
console.log(result);
