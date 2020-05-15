function array (num) {
    //[1,2]
    let result = [];
 for (i = 0; i < num.length; i++) {
    result.push(num[i]*2);

 }
 return result;
}
let num = [1, 2]
console.log(array(num));