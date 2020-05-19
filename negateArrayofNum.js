function negate(arr) {
    let result=[];
   for (let i=0;i<arr.length;i++){
    result.push(-arr[i]);
   }
   return result;
}
let arr = [1, 2, 3, 4];
console.log(negate(arr));