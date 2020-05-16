function Go(num) {
	let total = "";
	for (i=0; i < num; i++){
        //total.repeat(num(i)); 
        //total.repeat(num([i]));
        total += '-';
	}
	return total;
}
let num = 7;
console.log(Go(num));
