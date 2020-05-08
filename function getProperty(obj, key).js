function getProperty(obj, key) {
  let objNew = {
    'obj': obj,
    'key': key
};
return obj[key];
}
let output = getProperty('value');
console.log(output);