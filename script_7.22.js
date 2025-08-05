/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
*/

function predictAge(...ages){
    const arr = []
    arr.push(...ages)
    const sum = arr.map(el => el ** 2).reduce((acc,sep) => acc += sep, 0)
    let sqrted = Math.sqrt(sum) / 2
    return Math.floor(sqrted)
}