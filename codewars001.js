function removeChar(str){
    //turn string into an arry
     let stringArray = str.split('')
     //remove last character from string array
     stringArray.pop()
     //remove first character from string array
     stringArray.shift()
     //join array of characters back into a string and return
     return stringArray.join('')
   };
