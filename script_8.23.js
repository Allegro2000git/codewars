//Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).

function getCount(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}