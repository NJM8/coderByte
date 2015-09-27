// insert dashes between all the odd numbers

function DashInsert(str) { 
	// convert passed number to a string
	var str = str.toString();
	// initialize string variable to return
	var newStr = [];

	// walk through the string except the last number
	for (var i = 0; i < str.length - 1; i++) {
		// if the current number is odd and the next number is odd
		if (str[i] % 2 != 0 && str[i + 1] % 2 != 0) {
			// concat the current number and the dash seperator
			newStr += str[i] + '-';
		} else {
			// otherwise just concat the current number
			newStr += str[i];
		}
	};

	// return the final string plus the final number added back on the end
	return newStr += str[str.length - 1];
}


console.log(DashInsert(4554));
console.log(DashInsert(5555));
console.log(DashInsert(01234567890));