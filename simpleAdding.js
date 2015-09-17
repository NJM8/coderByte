// function to add all the numbers up to a number



function SimpleAdding(num) { 
  // create counter variable
  var finalNum = 0;
  
  // iterate up to our number adding each number to the counter
  for (i = 0; i < num + 1; i++) {
    finalNum += i;
  }
  // return count 
  return finalNum; 
         
}