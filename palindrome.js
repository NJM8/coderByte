// function to determine if a string is a palindrome

function palindrome(str) {
	// make sure the string is lower case
	var string = str.toLowerCase();

	// strip out spaces
	string = string.replace(/\s+/g, '');

	// walk up the first half of the string, ignoring the middle char if length is odd
	for (var i = 0; i < Math.floor(string.length / 2); i++) {
		// if the selected letter is not equal to the opposite letter counting back from the end
		if (string[i] != string[string.length - i - 1]) {
			// return false, string is not a palindrome
			return false;
		};
	};

	// if the for loop passes the string must be a palindrome, return true!
	return true;
}



console.log(palendrome('hello'));
console.log(palendrome('racecar'));
console.log(palendrome('munnum'));