const fs = require('fs')

const myString = process.argv[2];

fs.readFile(myString, 'utf8', (err, data) => {
  if (err) throw err;
  var myArray = data.split('\n'); // to array
  var result = myArray.length -1;
  console.log(result);
});
