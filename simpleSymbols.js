// funcion to check if all the letters in a string have a + symbol on either side of them

function SimpleSymbols(str) { 
  // initialize return variable
  var symbolStr = true;
  
  // walk through the string
  for (var i = 0; i < str.length; i++) {
    // if a letter is found
    if (/[a-z]/.test(str[i]) == true) {
      // check  if there are + symbols on either side, if one side does not
      // contain a + symbol return false, otherwise variable is already set to true
      if (str[i-1] != '+' || str[i+1] != '+') {
        return false
      }
    }
  }
   
  return symbolStr; 
         
}

console.log(SimpleSymbols('==+d+==+t+='));