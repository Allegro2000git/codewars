/* The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.*/

function century(year) {
	if (year % 100 != 0) {
		return year = Math.ceil((year + 1) / 100);
	}
	else {
		return year /= 100;
	}

}