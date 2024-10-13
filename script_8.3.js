/*Your task is to create a function that does four basic mathematical operations.*/

function basicOp(operation, value1, value2) {
	switch (operation) {
		case "+": return value1 + value2;
		case "-": return value1 - value2;
		case "*": return value1 * value2;
		case "/": return value1 / value2;
	}
	return 0;
}
