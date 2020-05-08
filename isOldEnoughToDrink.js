function isOldEnoughToDrink(age) {
    if (age >=21) {
      return true;
    } else {
      return false;
    }
  }
  let legalAge = isOldEnoughToDrink (19);
  console.log(legalAge);