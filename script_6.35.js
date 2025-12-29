/*Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:
274 -> '2-7-4'
6815 -> '68-1-5'
*/

function dashatize(num) {
    const str = Math.abs(num).toString().split("")
    const arr = []

    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) % 2 !== 0) {
            arr.push('-' + str[i] + '-');
        } else {
            arr.push(str[i])
        }
    }
    const result = arr.join("").replace(/--/g, '-').replace(/^-|-$/g, '')
    return result
}