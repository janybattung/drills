function array (num) {
    //[1,2,3,4..]
        let total = [];
        let sum = 0;
    for (let i = 1; i < 100; i++) {
    
        if (i % 2 === 0) {
            total.push(i);
            sum = sum + i;
    
        }
    }
    return sum;
    }
    let num = [];
    console.log(array(num));