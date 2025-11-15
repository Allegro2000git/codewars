/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    let arr = []
    for (const el of url) {
        if (el === "#") {
            return arr.join("")
        }
        arr.push(el)
    }
    return arr.join('');
}