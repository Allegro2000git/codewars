/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps,
then don't add it to the sum. See the 4th example below.

Examples
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/

const sequenceSum = (begin, end, step) => {
    let sum = 0
    if (begin > end) {
        return 0
    }

    for (let i = begin; i <= end; i += step) {
        sum += i;
    }
    return sum;
};