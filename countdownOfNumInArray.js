function countdown(start) {
	let arr = [];
	for (let i=start; i >=0; i--){
		arr.push(i);
	}
	return arr;
}
let start = 6;
console.log(countdown(start)); 	