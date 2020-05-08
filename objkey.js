function getProperty(obj, key) {
    //let objNew = {
      //'obj': obj,
      //'key': key
 // };
  return obj[key];
  }
  let x = {
      obj1:'value2',
      obj2: 'value3'
    }
  let output = getProperty(x, 'obj3');
  console.log(output);
  