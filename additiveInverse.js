function additiveInverse(arr) {
    let result=[];
    for (let i=0;i<arr.length;i++){
     
        arr.push(-arr[i]);
    }
    return arr;
}
var n =[3, -9, 11];
console.log("Matrix before additive inverse["+ n+"]");
console.log(additiveInverse(n));