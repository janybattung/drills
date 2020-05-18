function array (num) {
//[1,2,3,4..]
    let total = [];
for (let i = 1; i < 100; i++) {

    if (i % 2 === 0) {
        total.push(i);
    }
}
return total;
}
let num = [];
console.log(array(num));