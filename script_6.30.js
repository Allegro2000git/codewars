/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:
[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
*/

function towerBuilder(n) {
    const tower = []
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - 1 - i);
        const blocks = '*'.repeat(2 * i + 1);
        const floor = spaces + blocks + spaces;
        tower.push(floor);
    }
    return tower
}