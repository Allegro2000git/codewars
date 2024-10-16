/*Write a function feast that takes the animal's name and dish as arguments and returns true or 
false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters*/

function feast(b, d) {
	return (b[0] == d[0] && b.slice(-1) == d.slice(-1)) ? true : false;
}