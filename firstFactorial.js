// function to calculate the factorial (product of all numbers leading up to a given number)
// of a number



function firstFactorial(num) { 
  // initialize factorial to return, use 1 because 1 * anything is 0
  var factorial = 1;

  // walk down the number given to the function, multiplying factorial
  // by the count each time
  for ( i = num; i > 0; i--) {
    factorial *= i;
  }
 
  // return product 
  return factorial; 
         
}

console.log(firstFactorial(5));