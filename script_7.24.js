/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

function XO(str) {
    if (!(str.includes("x") || str.includes("X") || str.includes("o") || str.includes("O")) ) return true
    const arr = str.split('')
    let x = 0
    let o = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "x" || arr[i] === "X") {
            x += 1
        } else if (arr[i] === "o" || arr[i] === "O") {
            o += 1
        }
    }
    return x == o
}

function XO(str) {
    const arr = str.toLowerCase().split('')
    return arr.filter(x => x === "x").length == arr.filter(o => o === "o").length
}