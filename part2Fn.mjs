
let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.
function sortData() {
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

    data.map((x) => {
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

export { data, sortData, removeGreaterThan, changeJobAndAge, reduceAvgAge }