function min(numbers) {
    let currentMin = numbers [0];
        for (let i=0; i < numbers.length; i++){
           if (numbers[i] < currentMin) {
             currentMin = numbers[i];
           }
         }
         return currentMin;
       }
let numbers = [4,6,8,5];
console.log(min(numbers));