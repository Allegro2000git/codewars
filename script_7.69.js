/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.
*/

function divCon(x){
    let nums1 = x.filter(el => typeof el === 'number').reduce((acc,curr) => acc + curr, 0)
    let nums2 = x.filter(el => typeof el === 'string').reduce((acc,curr) => acc + +curr, 0)
    return nums1 - nums2
}