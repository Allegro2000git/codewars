/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
*/

function isIsogram(str){
    if (str === "") return true

    const res = str.toLowerCase().split("").sort()

    for (let i = 1; i < res.length; i++) {
        if (res[i] === res[i - 1]) {
            return false;
        }
    }
    return true
}