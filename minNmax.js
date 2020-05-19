function max(numbers) {
    // [4, 6, 8, 5]
    let currentMax = numbers[0];
    for (let i=1; i < numbers.length; i++){
       if (numbers[i] > currentMax) { 
         currentMax = numbers[i];
       }
     }
     return currentMax;
   }
let numbers = [4,6,8,5];
console.log(max(numbers));