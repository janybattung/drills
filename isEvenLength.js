function isEvenLength(word) {
    let x = word.length;
    return x % 2 === 0 ? true : false;
   }
   
   let output = isEvenLength('wow');
   console.log(output);