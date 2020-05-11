function isOddLength(word) {
  let x = word.length;
  return x % 2 === 1 ? true : false;
}
let output = isOddLength('special');
console.log(output);