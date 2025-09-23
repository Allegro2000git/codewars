/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
*/

function sumArray(array) {
    if (!(Array.isArray(array))) return 0

    if (array.length === 1 || array.length === 2 || array.length === 0 )  {
        return 0
    }
    let sum = 0
    const sortered = array.sort((a,b) => a - b)

    for (let i = 1; i < sortered.length - 1; i++) {
        sum += array[i]
    }

    return sum
}