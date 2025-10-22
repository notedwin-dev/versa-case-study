const fs = require('fs');
const path = require('path');

const output = [];

for (let i = 0; i < 100; i++) {
  const num = i + 1;

  if (num % 3 === 0 && num % 5 === 0) {
    output.push('BIGBANG');
  } else if (num % 3 === 0) {
    output.push('BIG');
  } else if (num % 5 === 0) {
    output.push('BANG');
  } else {
    output.push(num.toString());
  }
}

try {
  fs.writeFileSync(path.join(__dirname, 'output.json'), JSON.stringify(output, null, 2));
  console.log('Output written to output.json');
  console.log("You should see the exact output in output.json:\n", output);
} catch (error) {
  console.error('Error writing to output.json:', error);
  console.log("However, you can still see the exact output of the program below:\n", output);
}