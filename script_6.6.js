/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "("
if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word){
    const obj = {}
    const lowerCaseWord = word.toLowerCase()
    let result = ''

    for (const el of lowerCaseWord) {
        obj[el] = (obj[el] || 0) + 1
    }

    for (const char of lowerCaseWord) {
        result += obj[char] > 1 ? ")" : "("
    }

    return result
}