/*
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string*/

function reverseLetter(str) {
    let filteredStr = ''
    for (let char of str) {
        const isLowercase = char >= 'a' && char <= 'z';
        const isUppercase = char >= 'A' && char <= 'Z';
        if (isLowercase || isUppercase) {
            filteredStr += char;
        }
    }
    return filteredStr.split('').reverse().join('');
}