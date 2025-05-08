//Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
    let res = (s1 + s2 + s3) / 3
    switch (true) {
        case res >= 90 && res <= 100: {
            res = "A"
            break
        }
        case res >= 80 && res < 90: {
            res = "B"
            break
        }
        case res >= 70 && res < 80: {
            res = "C"
            break
        }
        case res >= 60 && res < 70: {
            res = "D"
            break
        }
        default: res = "F"
    }
    return res
}