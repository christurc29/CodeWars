  //PREP
  //P - pass in an array of numbers that are all the same and one unique value, +, can include floats
  //R - return unique number
  //E

  function findUniq(arr) {
    return Number(arr.filter((e,i) => arr.indexOf(e) === arr.lastIndexOf(e)))
  //findUniq([1,1,1,1,5,1,1,1]) = 5
  //findUnique([0.2,0.2,0.2,8,0.2,0.2]) = 8
  }
  
  //P - 
     //Take number  an create an array with duplicates
    // find unique numbers that are not duplicated in array
   //return result from filtered array as a number