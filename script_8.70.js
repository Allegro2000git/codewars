/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input,
 and return the largest and lowest number in that list, respectively. Each function returns one number.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* */


let getMin = function(list){
    let minValue = Math.min(...list)
    return minValue
}

let getMax = function(list){
    let maxValue = Math.max(...list)
    return maxValue
}