import { sum, average, longestString, stringsLongerThan, printBetween } from './part1Fn.mjs';
import { data, sortData, removeGreaterThan, changeJobAndAge, reduceAvgAge } from './part2Fn.mjs'
import { obj1, incrementAge } from './part3Fn.mjs'
// Part 1: Thinking Functionally

console.log("Sum: ", sum([0, 1, 2, 3, 4]));
console.log("Average: ", average([0, 1, 2, 3, 4]))
console.log("Longest String: ", longestString(["word", "anotherWord", "differentWord", "thisWord"]));
console.log("String Longer than num: ", stringsLongerThan(["word", "anotherWord", "differentWord", "thisWord"], 7));
console.log("printBetween: ");
printBetween(4);
console.log("=====================================");

// Part 2: Thinking Methodically

console.log("Sorted by age: ", sortData());
console.log("Remove greater than 50: ", removeGreaterThan());
console.log("Change Job and Age: ", changeJobAndAge());
console.log("Reduce sum of ages, average: ", reduceAvgAge());
console.log("=====================================");

// Part 3: Thinking Critically

incrementAge(obj1);
console.log("Original: ", obj1);

let obj1Copy = obj1;
incrementAge(obj1Copy);
console.log("Copy: ", obj1Copy);
console.log("Original: ", obj1);


