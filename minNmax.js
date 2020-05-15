function max(numbers) {
    // [4, 6, 8, 5]
    let currentMax = numbers[0];
    for (let i=1; i < numbers.length; i++){
       if (numbers[i] > currentMax) { //currentMax is the current apple
         currentMax = numbers[i];
       }
     }
     return currentMax;
   }
//    function min(numbers) {
//      let currentMin = numbers [0];
//      for (let i=0; i < numbers.length; i++){
//        if (numbers[i] < currentMin) {
//          currentMin = numbers[i];
//        }
//      }
//      return currentMin;
//    }
let numbers = [4,6,8,5];
console.log(max(numbers));