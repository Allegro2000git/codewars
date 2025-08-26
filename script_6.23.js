/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
*/

function duplicateCount(text){
    const lower = text.toLowerCase()
    let res = 0
    const counts = new Map();
    for (const value of lower) {
        counts.set(value, (counts.get(value) || 0) + 1);

        if (counts.get(value) === 2) {
            res++
        }
    }

    return res
}

