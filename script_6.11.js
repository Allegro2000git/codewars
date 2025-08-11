/*Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiac", let's cross out the vowels. We get: "z o d ia c"

"zodiac" -> 26
The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.*/

function solve(s) {

    const alphabetNumbers = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
        o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }

    const without = s.replace(/[aeiou]/gi, '-');
    const newArr = without.split('-')

    const accum = newArr.map(el => {
        return el.split('').reduce((sum, char) => sum + (alphabetNumbers[char] || 0), 0);
    })

    return Math.max(...accum)

}