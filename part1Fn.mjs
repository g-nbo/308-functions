
// Take an array of numbers and return the sum.
function sum(arr) {

    let sum = 0;
    arr.forEach((element) => {
        sum += element;

    })
    return sum;
}

// Take an array of numbers and return the average.
function average(arr) {

    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    })
    let arrAverage = sum / arr.length;
    return arrAverage;
}


// Take an array of strings and return the longest string.
function longestString(arr) {

    const longestWord = arr.reduce(function (x, y) {
        if (x.length > y.length) {
            return x;
        } else {
            return y;
        }
    });
    return longestWord;
}

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function stringsLongerThan(arr, num) {
    let areLonger = arr.filter(element => element.length > num)

    return areLonger;
}

// Print every number between 1 and n without using loops
function printBetween(n, start = 1) {

    if (start > n) {
        return;
    }
    console.log(start);
    return printBetween(n, start + 1);

}

export { sum, average, longestString, stringsLongerThan, printBetween };