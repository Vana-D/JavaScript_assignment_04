/*
    Project: Assignment 04: The Basic Calculator (25 points)
    Date: 10/15/23
    Author: Van Do
*/


/* The Basic Calculator (25 points)

    In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:

    1. Create a function that will serve as the main calculation logic of your application. This function should be called calculate and will accept three parameters: x, y, and operation.

    2. In the script, prompt the user for a number and store that in a variable. Convert that to a number.

    3. Then, prompt the user for a second number and store that in a variable. Convert that to a number.

    4. Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.

    5. Finally, pass the three parameters into the calculate function to return the result of the calculation. You'll need to add a switch statement inside the calculate function to evaluate the operation and perform the appropriate calculation on the x and y numbers based on the operation passed in. 

    6. Display the result of the calculation within an alert.

    7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
*/

/*  --------------------------------------------------   */

alert('Welcome to the Basic Calculator Application!');

// -- ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {  
    let result;  
    switch(operation) {
        case '+':
            result = x + y;
            alert(`${x} + ${y} = ${result}`);
            break;

        case '-':
            result = x - y;
            alert(`${x} - ${y} = ${result}`);
            break;

        case '*':
            result = x * y;
            alert(`${x} * ${y} = ${result}`);
            break;

        case '/':
            result = x / y;
            alert(`${x} / ${y} = ${result}`);
            break;

        default:
            alert('Invalid operator');
            break;
    }
};


do {
// -- COLLECT FIRST NUMBER FROM USER
let x = parseInt(prompt('Enter a number'));
while (true) {
    if (isNaN(x)) {
            x = prompt("Enter the number in digits.");
        } else {
            break
        }
    }
console.log(x);


// -- COLLECT SECOND NUMBER FROM USER  
y = parseInt(prompt('Enter a second number'));
while (true) {
    if (isNaN(y)) {
            y = prompt("Enter the second number in digits.");
        } else {
            break
        }
    }
console.log(y);


// -- COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
operation = prompt("Please specify which type of operation you would like to perform:"+ '\n' + '\n' + 'addition ( + )' + '\n' + 'subtraction ( - )' + '\n' + 'multiply ( * )' + '\n' + 'divide ( / )');
    if (!(operation == '+' || operation  == '-' || operation == '*' || operation == '/' )) {
        operation = prompt('Please input operation using symbols. Try again!' + '\n' + '( + ), ( - ), ( * ) or ( / )');
    } 
    
    // -- CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    calculate(x, y, operation);
    again = prompt('Run applications again? (y/n)', 'y');
} while (again === 'y');

alert('The program has been terminated.')



