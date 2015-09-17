// simple function to determine the time in hours:minutes from a given number


function timeConvert (num) {
	// create variables for hours, minutes and return string
	var hours = 0;
	var minutes = 0;
	var time = '';
    
    // determine number of minutes by finding the remainder of 60
	minutes = num % 60;

	// determine number of hours
	hours = ( num - minutes ) / 60;
    
    // convert to a string seperated by a colon
	time = hours + ':' + minutes;

	return time;
}



console.log(timeConvert(63));