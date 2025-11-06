/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
Consult the solution set-up for the exact data structure implementation depending on your language.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
    const arr = []
    const myMap = new Map()

    for (const el of text) {
        if (myMap.has(el)) {
            myMap.set(el, myMap.get(el) + 1);
        } else {
            myMap.set(el, 1)
          }
        }

    for (const entry of myMap.entries()) {
        arr.push(entry)
      }
    return arr
}