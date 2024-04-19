
// Part 1: Thinking Functionally

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

    longestWord = arr.reduce(function(x, y) {
        if(x.length > y.length) {
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
    
    if(start > n) {
        return;
    }
    console.log(start);
    return printBetween(n, start + 1);
    
}

console.log("Sum: ", sum([0, 1, 2, 3, 4]));
console.log("Average: ", average([0, 1, 2, 3, 4]))
console.log("Longest String: ", longestString(["word", "anotherWord", "differentWord", "thisWord"]));
console.log("String Longer than num: ", stringsLongerThan(["word", "anotherWord", "differentWord", "thisWord"], 7));
console.log("printBetween: ");
printBetween(4);
console.log("=====================================")

// Part 2: Thinking Methodically

let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.
function sortData(){
    let sortedByAge = data.sort((x, y) => x.age - y.age);
    return sortedByAge;
}

// Filter the array to remove entries with an age greater than 50.
function removeGreaterThan() {
    let lessThan = data.filter((x) => x.age < 50);
    return lessThan;
}

// Map the array to change the “occupation” key to “job” and increment every age by 1.
function changeJobAndAge() {
    
    let mappedArr = data.map((x) => { 
        //increment age by 1
        x.age = parseInt(x.age) + 1
        // change occupation key to a job key
        x.job = x.occupation;
        delete x.occupation;
        return data;
    })
    return data;
}

// Use the reduce method to calculate the sum of the ages.
function reduceAvgAge() {
    let reducedAge = data.reduce((x, y) => x + y.age, 0);
    // Then use the result to calculate the average age.
    let avgAge = reducedAge / data.length;
    return avgAge;
}



console.log(sortData());
console.log(removeGreaterThan());
console.log(changeJobAndAge());
console.log(reduceAvgAge());
