function findSmallestNum(arr) {
    let smallestNum = arr[0];
//     for (i=0; i < arr.length; i++){
//         if (arr [i] < smallestNum) {
//             smallestNum = arr[i];
//         }
        
//     }
//     return smallestNum;
// }let arr = [4,7,1,3];
// console.log(findSmallestNum(arr));
}
let arr = [4,7,1,3];
console.log(Math.min(...arr));