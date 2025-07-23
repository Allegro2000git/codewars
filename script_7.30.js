/*Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language),
 whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

Examples
[13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 13+49 = 62 13+49=62 and the total weight of team 2 is 27.
*/

function rowWeights(array){
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            sum1 += array[i]
        } else {
            sum2 += array[i]
        }
    }
    return [sum1,sum2]
}