function areBothOdd(num1, num2) {
    if ((num1 % 2 === 1) && (num2 % 2 === 1)) {
      return true;
    } else {
      return false;
    }
  }
  
  let y = areBothOdd (10,3);
  console.log (y);
  