// function to capitalize the first letter of every word in a string

function LetterCapitalize(str) { 
  // split the string by the spaces in it to fill an array
  var splitStr = str.split(' ');
  // create string to return 
  var rebuiltStr = '';
  
  // walk up the string array
  for ( i = 0; i < splitStr.length; i++) {
    // set a string variable to our current step
    var currentStr = splitStr[i];
    // concat the fist letter of the current word converted to uppercase
    rebuiltStr += currentStr.charAt(0).toUpperCase() + 
      // then concat the rest of the word and a space
    	currentStr.substring(1,currentStr.length) + ' ';
  }
  
  // return final string 
  return rebuiltStr;      
}

console.log(LetterCapitalize('hello world how are you'));