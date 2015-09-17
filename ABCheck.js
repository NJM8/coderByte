// function to check if the letters a and b occur in a sentance and if the are at least 3 spaces apart


// first version, did not work for multiple occurences of each letter a, use a for loop!
//function ABCheck(str) {
  // find and store index of first occurences 
  // var aLocation = str.indexOf('a');
 // var bLocation = str.indexOf('b');

  // in the difference between the two id more than three return true, else return false
 // if (bLocation - aLocation >= 3) {
 // 	return true;
 // } else {
 // 	return false;
 // };

  // this needs refactoring, it doesn't account for multiple occurences of each letter       
//}


function ABCheck(str) {
	// convert the passed string to lowercase
	var string = str.toLowerCase();

	// walk through the string
	for (var i = 0; i < string.length; i++) {
		// check for a letter match with a
		if (string[i] == 'a'){
			// check if there is a letter b three spaces ahead, if so return true
			if (string[i + 4] == 'b') {
				return true;
			};
		}	
	};

	// if no matches are found return false
	return false	
}

console.log(ABCheck("Laura sobs"));
console.log(ABCheck("abccccazzzb"));