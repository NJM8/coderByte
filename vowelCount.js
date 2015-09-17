// function to count the vowels in a sentance


function VowelCount(str) {
	// counts the number of matches in a regex pattern of vowels
	var count = str.match(/[aeiou]/g);
	// returns the length of that object
	return count.length;
}

console.log(VowelCount('helloooooooo'));

