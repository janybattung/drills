function repeat(item, times) {
    let arr = [];
    for (i=0; i < times; i++) {
        arr.push(item);
       // return new Array (times).fill(item);
        }
     return arr;
    //return new Array (times).fill(item);
}
let output = repeat ("edabit", 6);
console.log(output);