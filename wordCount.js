// function to count the words in a sentance


function WordCount(str) { 

  // splits the words into an array seperated by spaces and returns the length of that array 
  return str.split(' ').length;       
}




console.log(WordCount('hello world'));