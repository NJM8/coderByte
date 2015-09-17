// function to count the 'x's and 'o's in a string

function ExOh(str) { 
  // create variables to hold the letter counts
  var letterX = 0;
  var letterO = 0;

  // walk through the string
  for (var i = 0; i < str.length; i++) {
  	// if the letter in step is a lower case x add one to the letterX count
  	if (str[i].toLowerCase() == 'x') {
  		letterX += 1;
  	// if the letter in step is a lower case o add one to the letterO count
  	} else if (str[i].toLowerCase() == 'o') {
  		letterO += 1;
  	}
   
  }
  // return comparison of letter counts  
  return letterO == letterX;        
}


console.log(ExOh('xxoo'));
console.log(ExOh('xxxoo'));