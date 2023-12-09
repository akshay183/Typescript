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
/* Arrays Tuples and Objects */
// Tuple has strict data type for specified size, after that if tuple is not read only
// than there is no type security for pushed elements for tuple. 
let ourReadonlyTuple = [5, true, 'The Real Coding God'];
/* make tuple readonly as without it there will be no stype safety for push elements */
let ourTuple = [5, true, 'The Real Coding God'];
// Arrays
let arr = [1, true, 'akshay'];
/*
    *imp points
    arr = ourTuple -> correct
    ourTuple = arr -> wrong
*/
/* Objects */
// https://www.w3schools.com/typescript/typescript_object_types.php
console.log('typeof(sumOfNum) :>> ', typeof (sumOfNum));
// remember tho a function is object, but type of return it as function only.
const car = {
    wheels: 4,
    engine: 'maruti'
};
// alias type vs interface => interface only used with objects.
let truck_1 = {
    wheels: 4,
    engine: 'toyota'
};
let truck_2 = {
    wheels: 8,
    engine: 'Tata',
    color: 'red'
};
/* Destructuring creates new object, remeber assignment
   will take place, but since it is converted to js file
   type safety gets messed after. so color also gets in
   truck_1 object even tho it is Truck type. So this is
   one of mechanism to explicilty only get required
   paramters.
 
let {color, ...newTruck} = truck_2
truck_1 = newTruck
truck_1.wheels = 9

*/
truck_1 = truck_2; // color also get into prod, this fk prod as it compiles to js.
// here truck_1 logs 
console.log('truck1 :>> ', truck_1);
let arijitSingh = {
    songsCount: 4,
    genre: 'sad',
};
let atifAslam = {
    songsCount: 3,
    genre: 'melody',
};
/*
    atifAslam = arijitSingh => gives error as undefined is not assignable to string
*/
arijitSingh = atifAslam;
console.log('arijitSingh :>> ', arijitSingh);
/*

    Error=> because firstly its a bad practice to use methods
    over optional field as it can be null/undefined
    const greet = (guitarist: Guitarist) {
        return guitarist.genre.toUpperCase;
    }

    instead
*/
const greet = (guitarist) => {
    if (guitarist.genre) {
        return `Genre is ${guitarist.genre}`;
    }
    return `genre data is absent`;
};
console.log('greet(arijitSingh) :>> ', greet(arijitSingh));
/* Enum =>
    Unlike other stuff in TS which are just extension or typed property of JS
    Enum are actually feature extension in TS.
*/
/* normally first elements starts from 0, but we can change ordering */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
const emillaMathGrade = Grade.U;
// console.log(emillaMathGrade==Grade.U);
