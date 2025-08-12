/*The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the
title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number

We need a function to collect these numbers, that may receive two integers a,b that defines the range [a,b] (inclusive)
and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
*/

function sumDigPow(a, b) {
    const arr = [];
    const newArr = [];

    while (a <= b) {
        arr.push(a);
        a++;
    }

    for (let i = 0; i < arr.length; i++) {
        const dig = String(arr[i]).split('');
        let sum = 0;

        for (let j = 0; j < dig.length; j++) {
            sum += Math.pow(parseInt(dig[j], 10), j + 1);
        }

        if (sum === arr[i]) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}