function equalSlices(total, people, each) {
	let product = people*each;
	if (product <= total) {
		return true;
	} else {
		return false;
	}
}
let output = equalSlices (24,12,2);
console.log(output);