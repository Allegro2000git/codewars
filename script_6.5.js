/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    const str = String(num)
    const arr = []

    for (let i = 0; i < str.length; i++) {
        const el = str[i]
        if (el === "0") continue

        const placeValue = Math.pow(10, str.length - i - 1)
        arr.push(el * placeValue)
    }
    return arr.join(" + ")
}

console.log(expandedForm(70304))