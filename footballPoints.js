function footballPoints(wins, draws, losses) {
	let x = wins * 3;
	let y = draws * 1; 
	let z = losses * 0;
	return x + y + z;
	
}
let output = footballPoints(5, 5, 5);
console.log(output);