/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22)
*/

function minSum(arr) {
    const sorted = arr.sort((a,b) => a - b)
    const newArr = []

    for (let i = 0; i < sorted.length / 2; i++) {
        newArr.push(sorted[i] * sorted[sorted.length - 1 - i])
    }
    return newArr.reduce((acc,curr) => acc + curr, 0)
}