/*Complete the function that takes a string as an argument representing the current state of 
the light and returns a string representing the state the light should change to.*/

function updateLight(current) {

	switch (current) {
		case "green": { return "yellow"; }
		case "yellow": { return "red"; }
		case "red": { return "green"; }
	}
}