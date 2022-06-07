let fs = require('fs');
let input = fs.readFileSync('/dev/stdin')
  .toString().split('\n'); //공백문자로 구분

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
console.log(a*b)
