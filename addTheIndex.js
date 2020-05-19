function addIndexes(arr) {
    let currentNum = [];
    	for (i=0; i < arr.length; i++){

        currentNum.push(arr[i] + i);
    }
    return currentNum;
}
let arr = [1,2,3,4];
console.log(addIndexes(arr));