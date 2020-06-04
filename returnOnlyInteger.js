function returnOnlyInteger(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
			if (Number.isInteger(arr[i]) === true) {
					newArr.push(arr[i]);
			}
	}
	return newArr;
}
let output = returnOnlyInteger([9, 2, "space", "car", "lion", 16]);
console.log(output);