function average(numbers) {
    let total = numbers[0];
    for (let i=1; i < numbers.length; i++){
      total += numbers[i];
    }
    return total / numbers.length;
  }
  let output = average([3,2,3,4]);
  console.log(output);