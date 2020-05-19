function additiveInverse(arr) {
    let result=[];
    for (let i=0;i<arr.length;i++){
     
        result.push(-arr[i]);
    }
    return result;
}
let arr = [3, -9, 11];
//console.log("Matrix before additive inverse["+ n+"]");
console.log(additiveInverse(arr));
// function additiveInverse(arr) {
// 	let newArray =[];
// for (i = 0; i < arr.length; i++){
// 	let obj = arr[i]
// 	 newArray.push(-(obj))
// } 
// 	return newArray
// }
// let arr = [3, -9, 11];
// console.log (additiveInverse(arr));