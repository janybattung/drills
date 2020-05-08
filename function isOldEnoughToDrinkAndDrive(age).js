function isOldEnoughToDrinkAndDrive(age) {
  let drinkDrive = false;
  if (age >=21) {
    drinkDrive = false;
  }
  return drinkDrive;
}
let legalToDrinkDrive = isOldEnoughToDrinkAndDrive(21);
console.log(legalToDrinkDrive);