// function to alphabatize all the characters in a string

function alphabetSoup(str) {
  // create an array to hold all our letters
  var strArray = [];

  // create an empty string to hold the final sorted letters
  var sortedStr = '';

  // walk through the letters in a string adding each one to our array
  for (var i = 0; i < str.length; i++) {
  	strArray.push(str[i]);
  }

  // sort the array by charCode
  strArray = strArray.sort();

  // walk through the array appending each letter onto the sortedStr
  for (var i = 0; i < strArray.length; i++) {
  	sortedStr += strArray[i];
  }

  // return the sortedStr
  return sortedStr;
}



console.log(alphabetSoup('hello'));