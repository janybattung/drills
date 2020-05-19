function addEnding(arr, ending) {
   
    for(let i=0; i < arr.length; i++){
		arr[i] = arr[i]+ending;
	}
	return arr;
}  
    let y = addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly');
    console.log(y);
