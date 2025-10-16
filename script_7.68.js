/*
Task:

Write these two functions
and
high-order function oper(fct, s) where
fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

Note:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

Bash Note:
The input strings are separated by , instead of \n. The output strings should be separated by \r instead of \n. See "Sample Tests".
*/

function vertMirror(s) {
    return s.split('\n').map(line => line.split('').reverse().join('')).join('\n');
}

function horMirror(s) {
    return s.split('\n').reverse().join('\n');
}

function oper(fct, s) {
    return fct(s);
}