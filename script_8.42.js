/* Given an array of integers your solution should find the smallest integer.

You can assume, for the purpose of this kata, that the supplied array will not be empty. */

function findSmallestInt(arr) {

	let sorted = arr.sort((a, b) => a - b)
	return sorted[0]
}