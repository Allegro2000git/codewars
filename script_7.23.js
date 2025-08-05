/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

It is guaranteed that there will always be a unique valid answer. More precisely:

there will be no arrays with less than 2 elements
there will be no arrays where all elements are equal
*/

function isSortedAndHow(array) {
    let isAscending = true;
    let isDescending = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i-1]) {
            isDescending = false;
        } else if (array[i] < array[i-1]) {
            isAscending = false;
        }
    }

    if (isAscending) return "yes, ascending";
    if (isDescending) return "yes, descending";
    return "no";
}