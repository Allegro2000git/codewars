
/*Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins
return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:
 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:
 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims. Sum up each side's letters' power values to determine which side wins.
*/

function alphabetWar(fight) {
    const left = {
        w: 4, p: 3, b: 2, s: 1
    }

    const right = {
        m: 4, q: 3, d: 2, z: 1
    }

    let count1 = 0
    let count2 = 0

    for (let i = 0; i < fight.length; i++) {
        if (left[fight[i]]) {
            count1 += left[fight[i]]
        } else if (right[fight[i]]) {
            count2 += right[fight[i]]
        }
    }

    if (count1 > count2) {
        return "Left side wins!"
    } else if (count2 > count1) {
        return "Right side wins!"
    } else {
        return "Let's fight again!"
    }
}