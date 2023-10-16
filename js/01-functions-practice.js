/*
    Project: Assignment 04: Practice with Functions (5 points)
    Date: 10/11/23
    Author: Van Do
*/

/*  Practice with Functions (5 points)
    1. Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
    2. Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    3. Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
    4. Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
*/

/*  --------------------------------------------------   */

// STEP 1 - halfNumber()
let num;
let half;

function halfNumber(num){
    half = num / 2;
    console.log(`Half of ${num} is ${half}.`);
}

halfNumber(5);

/*  --------------------------------------------------   */

// STEP 2 - squareNumber()
let number;
let square;

function squareNumber(number){
    square = number * number;
    console.log(`The result of squaring the number ${number} is ${square}.`)
}

squareNumber(3);

/*  --------------------------------------------------   */

// STEP 3 - percentOf()
let a;
let b;
let percent;

function percentOf(a, b){
    percent = (a / b) * 100;
    console.log(`${a} is ${percent}% of ${b}.`);
}

percentOf(2, 4);

/*  --------------------------------------------------   */

// STEP 4 - findModulus()
let x;
let y;
let modulus;

function findModulus(x, y){
    modulus = x % y;
    console.log(`${modulus} is the modulus of ${y} and ${x}.`);
}

findModulus(10, 4);

/*  --------------------------------------------------   */