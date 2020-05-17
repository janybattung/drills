function multiplyByLength(arr) {
   // [2, 6, 4, 9]
    //let x = [0];
    let y = [];
	for (i=0; i < arr.length; i++) {
		y.push(arr[i] * arr.length);
	}
	return y;
}
let arr = [2,6,4,9];
console.log(multiplyByLength(arr));
