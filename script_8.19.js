//When provided with a letter, return its position in the alphabet. Output :: "Position of alphabet: 1"

function position(letter) {
	const alphabet = ["0", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	return "Position of alphabet: " + alphabet.indexOf(letter);
}