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
// ------------------------------------------------------
/* Literals */
// now this name_1 literal is like const which can only be assigned to either 
// 'dave' or 'John'
let name_1;
name_1 = 'John';
name_1 = 'dave';
console.log(name_1);
/* Functions */
const add = function (a, b) {
    return a + b;
};
const addV2 = function (a, b) {
    return a + b;
};
const addV3 = (a, b) => {
    return a + b;
};
console.log(addV3(78, 79));
// optional paramters => need to be present at last of paramter declaration.
const optionalFunc = (a, b, c) => {
    let sum = a;
    if (typeof c !== 'undefined') {
        sum = sum + c;
    }
    if (typeof b !== 'undefined') {
        sum = sum + b;
    }
    console.log(a, b, c);
    return sum;
};
console.log(optionalFunc(1, undefined, 2));
// default paramters => 
//  > can be at any position, to remove ambiguity use undefined at places.
//  > type or interface wont work for function type declaration.
const defaultFunction = (a, b = 10, c) => {
    return a + b + c;
};
console.log(defaultFunction(1, undefined, -1));
// Rest Parameter -> should be at the end of param declaration.
const multiplyFunc = (a, ...b) => {
    return a * b.reduce((prev, curr) => prev * curr);
};
console.log(multiplyFunc(1, 2, 3));
// 'never' type use - when function dont return anything, its different than void,
//  as here function dont end, ex infinite loop, or it throws error.
/*
const infiniteFucntion = (): never => {
    let i: number = 1

    while(true) {
        i++
    }
}
*/
const errorMessage = (message) => {
    throw Error(message);
};
/*
    *imp
        > suppose below function , for ts we need to return never type.
*/
const stringOrNumber = (value) => {
    if (typeof value === 'number') {
        return 'number';
    }
    if (typeof value === 'string') {
        return 'string';
    }
    // throw errorMessage("fked up")
    // or
    return errorMessage("nothing to return");
};
console.log(stringOrNumber(1));
let valueForCasting = 'john';
let valueCastedA = valueForCasting;
let valueCastedB = valueForCasting;
/*
    *imp => its just like we should be sure to what we are converting. As
            TS will trust us on this, if thats incorrect conversion, ts might not raise
            any exception.

*/
//  Conversion to type unkown first then convert to any other type
let unkownVar = 10;
console.log(typeof unkownVar);
// ------------------------------------------------------
/* An example of using readonly.
const days: readonly string[] as const = ["Monday", "Tuesday", "Wednesday"];

console.log(days[1]); // This is allowed
days.push("Thursday"); // This is not allowed
*/
/* Classes */
// we can do same stuff i.e method overloading, overirinding in same way.
// simple way to declare a class
class Animal {
    constructor(numLegs, name, age) {
        this.numLegs = numLegs;
        this.name = name;
        this.age = age;
    }
    getnumLegs() {
        return this.numLegs;
    }
}
const animal = new Animal(2, 'human', 20);
// console.log(animal.getnumLegs())
// here after declaration we also need to initialise in constructor
class Vehicle {
    constructor(numTyres, kmRan) {
        this.kmRan = kmRan;
        this.numTyres = numTyres;
    }
}
// static keyword has same meaning as in c++, except no static class in TS
// we can have static blocks as well
/* Getters and Setter

    TypeScript has some special inference rules for accessors:

    > If get exists but no set, the property is automatically readonly
    > If the type of the setter parameter is not specified, it is inferred from the return type of the getter
    > Getters and setters must have the same Member Visibility

*/
class Devices {
    constructor(
    // public static cost: number,// error dont do on paramter
    cost, powerConsumedHr, companiesPublished) {
        this.powerConsumedHr = powerConsumedHr;
        this.companiesPublished = companiesPublished;
        Devices.cost = cost;
    }
    get getCost() {
        return Devices.cost;
    }
    set setCost(cost) {
        Devices.cost = cost;
    }
    get getCompaniesPublished() {
        if (this.companiesPublished) {
            return this.companiesPublished;
        }
        throw Error('Wrong data passed, not string array');
    }
    set setCompaniesPublished(companiesPublished) {
        if (Array.isArray(companiesPublished) &&
            companiesPublished.every((val) => typeof val === "string")) {
            this.companiesPublished = companiesPublished;
            return;
        }
        throw Error(`data is not of string array type`);
    }
}
const keyboard = new Devices(100, 200);
// imp point, ts can be messed while checking array data type
// so setCompaniesPublished is safe cheked for type
keyboard.setCompaniesPublished = ["dell", "lg"];
console.log(keyboard.getCompaniesPublished);
// Inheritence + interface
class Sports {
    constructor(nameSports, numPlayers) {
        this.nameSports = nameSports;
        this.numPlayers = numPlayers;
    }
    giveSecretValue() {
        return "secret value";
    }
    hashSecretValue() {
        return this.giveSecretValue + " hashed";
    }
}
class Cricket extends Sports {
    constructor(nameSports, numPlayers) {
        super(nameSports, numPlayers);
        this.numPlayers = numPlayers;
    }
    hashSecretValue(param) {
        return 'overidden hashSecretValue method';
    }
}
class Guitar {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
// ------------------------------------------------------
