// program to shift all the letters in a string one place forward in the alphabet and capitalize the vowels

// helper function to shift the letters
function modifyLetter(str) {
  // create variables to hold the letter list and the final shifted string
  var letterList = 'abcdefghijklmnopqrstuvwxyz';
  var modifiedString = '';
  
  // walk through the string
  for (var i = 0; i < str.length; i++) {
    // if anything except for a letter is encountered, concat that to the final string to maintain punctuation 
    if (/[a-z]/.test(str[i]) == false) {
      modifiedString += str[i];
    } else {
      // otherwise get the position of the letter in the letterList
      var currentPosition = letterList.indexOf(str[i]);

      // if that position is the at the end of the list, concat the letter a to the final string
      if (currentPosition == 25) {
        modifiedString += 'a';
      } else {
        // otherwise concat the next letter in the letterList
        modifiedString += letterList.charAt(currentPosition + 1);
  }}}
  // return final shifted string
  return modifiedString;
}

// helper function to capitalize all the voewls in the string
function vowelCapitalize(str) {
  
  // init new string, replace all the letters that match this regex with this function that will capitalize it
  var newString = str.replace(/[aeiou]/g, function(letter) {
    return letter.toUpperCase()
  });
  
  // return new string with capitalized vowels
  return newString;
}

// main runner function
function LetterChanges(str) {
  // make a copy of the passed string with all lowercase letters, easy to match in modifyLetter function
  var changedString = str.toLowerCase();
  // run string though modifyLetter to shift all the letters forward
  changedString = modifyLetter(changedString);
  // run string through vowelCapitalize to capitalize all the vowels
  changedString = vowelCapitalize(changedString);
  
  // return the final string 
  return changedString;         
}

console.log(LetterChanges("beautiful^"));
console.log(LetterChanges("abcdefghijklmnopqrstuvwxyz"));
// console.log(LetterChanges('*&Im all fin*%@ed'));