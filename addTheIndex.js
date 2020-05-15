function addIndexes(arr) {
    let currentNum = [];
    	for (i=0; i < arr.length; i++){
        //num.map((x,i) => x + i);
       // num.push(i);
        //currentNum = arr[i] += i;
        currentNum.push(arr[i] + i);
    }
    return currentNum;
}
let arr = [1,2,3,4];
console.log(addIndexes(arr));