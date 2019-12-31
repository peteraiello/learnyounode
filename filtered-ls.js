const fs = require('fs');
const path = require('path');

const dir = process.argv[2]; // directories
const myFilter = '.' + process.argv[3]; // filter arg

fs.readdir(dir, 'utf8', (err, files) => {
  if (err)  return console.log(err);
  const filter = (value, index, self) => {
    var ext = path.extname(value); // returns extension
    return self.indexOf(value) === index & ext === myFilter;
  }
  const filtered = files.filter(filter);
  for (var i = 0; i < filtered.length; i++) {
    console.log(filtered[i]);
  }
});
