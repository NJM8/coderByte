// function to swap all the cases in a string



function SwapCase(str) { 
	// create empty string to build swapped string
	var swappedString = '';
	// regex to test if a letter is upper case
	var upperRegex = new RegExp('[A-Z]', 'g');
	// regex to test if a letter is lower case, not needed with ternary operator
	// var lowerRegex = new RegExp('[a-z]', 'g');

	// walk through the string, use a ternary operator to test if the letter is upper case, if so make it lower
	// case and concat to swapped string, if not make it upper case and concat to string
	for (var i = 0; i < str.length; i++) {
		swappedString += (str[i].match(upperRegex) ? str[i].toLowerCase() : str[i].toUpperCase());


	// first design using if else
	//	if (str[i].match(upperRegex)) {
	//		swappedString += str[i].toLowerCase();
	//	} else if (str[i].match(lowerRegex)) {
	//		swappedString += str[i].toUpperCase();
	//	} else {
	//		swappedString += str[i];
	//	}
	};

	return swappedString;
}
   



console.log(SwapCase('Hello World!'));
console.log(SwapCase('Ho&W aRe% YoU$'));