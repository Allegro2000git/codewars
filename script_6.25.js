/*You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.*/

function diamond(n){
    const arr = []
    if (n <= 0 || n % 2 === 0) return null

    for (let i = 1; i <= n; i += 2) {
        const spaces = ' '.repeat((n - i) / 2)
        arr.push(spaces + '*'.repeat(i))
    }

    const newArr = arr.map(el => el + '\n')
    return [...newArr, ...newArr.slice(0, -1).reverse()].join('')
}