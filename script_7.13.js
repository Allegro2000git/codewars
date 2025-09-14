/*
We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:

Input:
> 6
Output:
0+1+2+3+4+5+6 = 21

Input:
> -15
Output:
-15<0
*/

var SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        if (count < 0) return `${count}<0`
        if (count == 0) return `${count}=0`
        let num = 0
        let res = ''
        let sum = 0
        while (num <= count) {
            res += `+${num}`
            num++
        }
        sum = res.split("+").reduce((acc,curr) => acc + Number(curr), 0)
        return res.replace(/^./, "") + ` = ${sum}`

    };

    return SequenceSum;

})();