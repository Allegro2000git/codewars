/*
Find index of middle element of triplet.
* */

function gimme (triplet) {
    let sorted = [...triplet].sort((a, b) => a - b);
    let middle = sorted[1];
    return triplet.indexOf(middle);
}