/* After a hard quarter in the office you decide to get some rest on a vacation.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).*/

function rentalCarCost(d) {
	let sum = 0;
	if (d >= 7) {
		sum = d * 40 - 50;
	} else if (d >= 3 && d < 7) {
		sum = d * 40 - 20;
	} else { sum = d * 40; }
	return sum;
}
