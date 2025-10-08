/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2.
Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/

function solve(arr) {
    const alphabet = {
        A: 1, B: 2, C: 3, D: 4, E: 5,
        F: 6, G: 7, H: 8, I: 9, J: 10,
        K: 11, L: 12, M: 13, N: 14, O: 15,
        P: 16, Q: 17, R: 18, S: 19, T: 20,
        U: 21, V: 22, W: 23, X: 24, Y: 25,
        Z: 26
    };
    let res = []

    for (let i of arr) {
        i = i.toUpperCase()
        const newArr = []

        for (let j = 0; j < i.length; j++) {
            if (alphabet[i[j]] === j + 1) {
                newArr.push(i[j])
            }
        }
        res.push(newArr.length)
    }
    return res
}