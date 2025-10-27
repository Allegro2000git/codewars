/*
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x.
If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
With the above data your function gps(s, x) should return 74

Note
With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.
 */

function gps(s, x) {
    return Math.max(...x.slice(1).map((el, index) => 3600 * (el - x[index]) / s)) | 0
}
