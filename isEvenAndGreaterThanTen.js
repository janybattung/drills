function isEvenAndGreaterThanTen(num) {
    return (num % 2 === 0) && (num > 10 ? true : false);
  }
  
  let output = isEvenAndGreaterThanTen(14);
  console.log(output);