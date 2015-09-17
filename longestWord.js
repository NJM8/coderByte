// function to determine the longest word in a string, using the first occurance


function longestWord(sen) { 
  
  // initialize a copy of the string with all puncuation removed
  var seperatedString = sen.replace(/[|&;$!%@"<>()+,]/g, "");
  
  // turn the string copy into an array, seperating each word by the space betwen them  
  seperatedString = seperatedString.split(' ');
  
  // initialize an empty string for the longest word
  var longWord = '';
  
  // walk through the array of words
  for ( var i = 0; i < seperatedString.length; i++ ) {
    // compare the length of each word to the longWord length
    if (seperatedString[i].length > longWord.length) {
      // if the current word is longer than the longest word so far, make that the longWord
      longWord = seperatedString[i];
    // if the current word is as long as the longest word, continue on doing nothing  
    } else if (seperatedString[i].length == longWord.length) {
      continue;
    }
  }
  
  // return the longest word 
  return longWord; 
         
}