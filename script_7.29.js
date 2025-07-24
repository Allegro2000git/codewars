/*Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument,
 and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

"CodEWaRs" --> [0,3,4,6]
*/

var capitals = function (word) {
    const arr = []
    const res = word.split('')
    for (let i = 0; i < res.length; i++) {
        if (res[i] === res[i].toUpperCase()) {
            arr.push(i)
        }
    }
    return arr
};