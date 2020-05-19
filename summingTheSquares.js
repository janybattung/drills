function squaresSum(n) {
	let currentNum = 0;
	for (i=1; i <= n; i++){
		//currentNum = currentNum += i*i;
		currentNum = currentNum + Math.pow (i,2);
	}
	return currentNum; //1, 5, 9,
	//
}
let n = (4);
console.log(squaresSum(n));