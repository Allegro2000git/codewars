/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined
if any of the values aren't numbers.*/

function cubeOdd(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') return undefined
        if (arr[i] % 2 !== 0) {
            res += Math.pow(arr[i], 3)
        }
    }
    return res
}