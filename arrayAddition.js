// return true if the elements in the array add up to the largest number in the array


function ArrayAdditionI(arr) { 
	// sort the array from largest to smallest
	var sortedArray = arr.sort(function(a, b) {
  		return a - b;
	});
	// pop off the last/ largest number
	var largestNum = sortedArray.pop();
	// create variable to add up other numbers in array
	var arraySum = 0;

	//  sum remaining numbers
	for (var i = 0; i < sortedArray.length; i++) {
	 	arraySum += sortedArray[i];
	};

	// compare sum to largest number
	if (arraySum === largestNum) {
		return true;
	} else {
		return false;
	}; 
}


console.log(ArrayAdditionI([1,2,3,4]));
console.log(ArrayAdditionI([54,49,1,0,7,4]));
console.log(ArrayAdditionI([3,4,5,7]));
   