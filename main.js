"use strict";
//     🚀 Day 25 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 73: 
// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. 
//Then, update its value within the same function and log both the initial and updated values.
function updateVariable() {
    let myVariable = 10;
    console.log(`Initial value: ${myVariable}`); // output is 10 
    myVariable = 20;
    console.log(`Updated value: ${myVariable}`); // output is 20
}
updateVariable();
// Question 74:
// Swapping Variables: Demonstrate how to swap the values of two variables.
// Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
//Swaping ---shuffle the values
function swapVariables() {
    let a = 5;
    let b = 10;
    console.log(` before swap :a = ${a}`); // output is 5 in  original form
    console.log(` before swap :b = ${b}`); // output is 10 in  original form
    let temp = a;
    a = b;
    b = temp;
    console.log(` After swap :a = ${a}`); // output is 10 in  swaping  form
    console.log(` After swap :b = ${b}`); // output is 5 in  swaping form
}
swapVariables();
// Question 75
// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
// Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function compoundAssignmentOperators() {
    let x = 4;
    x += 5;
    console.log(` x += 5 : ${x}`); // output is 9
    x -= 3;
    console.log(` x -= 3 : ${x}`); // output is 6
    x *= 2;
    console.log(` x *= 2 : ${x}`); // output is 12
    x /= 2;
    console.log(` x /= 2 : ${x}`); // output is 6
}
compoundAssignmentOperators();
