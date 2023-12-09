"use strict";
console.log("hello");
let a = 1;
let b = 2;
let c = a * b;
console.log('c :>> ', c);
// ------------------------------------------------------
let age = 25;
let personName = "akshay";
let isCompleted;
let post; /* a union data type like or operator */
let address; /* this is also a data type */
let reg;
post = 'IPSAD1544S';
/* imp*
=> here
        const sumOfNum = (num1: number, num2: number | string) =>{
            return num1 + num2;
        }
    will give error as return type is unsure for typescript.

*/
/*
const sumOfNum: number | string = (num1: number | string, num2: number | string) =>{
    return num1 + num2;
} -> wrong syntax

*/
/*
error =>
const sumOfNum = (num1: number | string, num2: number | string): number | string => {
    return num1 + num2;
}
*/
const sumOfNum = (num1, num2) => {
    // If either operand is a string, perform string concatenation
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return String(num1) + String(num2);
    }
    // Both operands are numbers, perform addition
    return num1 + num2;
};
// ------------------------------------------------------
