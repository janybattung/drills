function volumeOfBox(sizes) {
    let result = [];
    result.push(sizes.height * sizes.width * sizes.length);

    return result;
}


let sizes = { width: 3, length: 4, height: 2 };
console.log(volumeOfBox(sizes));
