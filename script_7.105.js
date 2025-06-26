/*
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information

Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
9–10: The date within the month of birth
11: The year digit from the year of birth (e.g. for 1987 it would be 7)
12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name
14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
15–16: Two computer check digits. We will always use "AA"

Your task is to code a UK driving license number using an Array of data. The Array will look like
data = ["John","James","Smith","01-Jan-2000","M"];

Where the elements are as follows
0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
*/



function driver(data) {
    let surname = data[2].toUpperCase();
    let surnamePart = surname.slice(0, 5).padEnd(5, '9');

    let tenYearStr = data[3].split("-")[2][2]

    const monthStr = data[3].split("-")[1];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];

    const foundMonth = months.find(month => month.startsWith(monthStr) || month.slice(0, 3) === monthStr.slice(0, 3))


    const month = (months.indexOf(foundMonth) + 1).toString().padStart(2, "0");
    const adjustedMonth = data[4] === "F" ? (parseInt(month) + 50).toString().padStart(2, "0") : month;

    let dateDayYearStr = data[3].split("-")[0]
    let dateYearStr = data[3].split("-")[2][3]

    let surName = data[1] === '' ?  9 : data[1][0]

    let nameSurName = data[0][0] + surName


    return surnamePart + tenYearStr + adjustedMonth + dateDayYearStr + dateYearStr + nameSurName + "9AA"
}