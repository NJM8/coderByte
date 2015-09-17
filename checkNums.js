// simple function to check if one number is larger than another, returns -1 if they are the same


function checkNums(num1, num2) {
	// if the second number is larger return true
	if (num2 > num1) {
		return 'true';
	// if they are equal return -1	
	} else if (num2 == num1) {
		return '-1';
	// otherwise return false (assuming last option is that the first number is larger)	
	} else {
		return 'false';
	}
}


console.log(checkNums(1,2));
console.log(checkNums(1,1));
console.log(checkNums(2,1));