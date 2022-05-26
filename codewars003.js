//PREP
//P - number value, if value entered is string return "Error"
//R - return the value * 50 then + 6


function problem(x){

    return typeof x === "string" ? `Error` : x * 50 + 6;
  
  }
  
  //E - problem(1) = 56
  // problem(-3) = -144
  // problem("hi") = "Error"
  
  //Pseudocode -
  //Check if value is string, if yes, return "error", if no, continue
  //if continued, multiply value by 50, then add 6
  //return new value