function checkAge(name, age) {
    if (age >=21) {
      return "Welcome, "+ name + "!";
    } else {
      return "Go home, " + name + "!";
    }
   }
   let output = checkAge ("Jennifer" , 20);
   console.log(output);