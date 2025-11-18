/*You are given an array with several "even" words, one "odd" word, and some numbers mixed in.
Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.*/

function oddBall(arr){
    const findIndex = arr.findIndex(el => el === "odd")
    for (const el of arr) {
        if (typeof(el) === "number" && el === findIndex) return true
    }
    return false
}