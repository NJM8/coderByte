// function to reverse a string



function firstReverse(str) { 

  // initialize new empty string
  var newStr = '';
  
  // walk through string passed to function backwards, concatenating 
  // each letter from the end onto th estart of the new string
  for ( var i = 1; i < str.length + 1; i++) { 
      newStr += str.slice(str.length - i, str.length - i + 1);
  };
    
  // return result  
  return newStr; 
         
}


console.log(firstReverse('Hello World'));
