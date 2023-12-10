console.log("hello")

let a:number = 1
let b:number = 2

let c = a*b
console.log('c :>> ', c);

// ------------------------------------------------------

let age: number | string = 25;
let personName: string = "akshay";
let isCompleted: boolean;
let post: number | string; /* a union data type like or operator */
let address: any; /* this is also a data type */
let reg: RegExp;

post = 'IPSAD1544S'

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
const sumOfNum = (num1: number | string, num2: number | string): number | string => {
    // If either operand is a string, perform string concatenation
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return String(num1) + String(num2);
    }

    // Both operands are numbers, perform addition
    return num1 + num2;
}

// ------------------------------------------------------

/* Arrays Tuples and Objects */


// Tuple has strict data type for specified size, after that if tuple is not read only
// than there is no type security for pushed elements for tuple. 
let ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
/* make tuple readonly as without it there will be no stype safety for push elements */

let ourTuple: [number, boolean, string] = [5, true, 'The Real Coding God'];

// Arrays
let arr = [1,true,'akshay']

/* 
    *imp points
    arr = ourTuple -> correct
    ourTuple = arr -> wrong
*/

/* Objects */
// https://www.w3schools.com/typescript/typescript_object_types.php

console.log('typeof(sumOfNum) :>> ', typeof(sumOfNum));
// remember tho a function is object, but type of return it as function only.

const car: {
    wheels: number,
    engine: string
} = {
    wheels: 4,
    engine: 'maruti'
}

// error on adding non existing variable => car.name = 'hyundia'
type WheelCount = number
type Truck = {
    wheels: WheelCount,
    engine: string
}

interface TruckInterface {
    wheels: WheelCount,
    engine: string
}

// alias type vs interface => interface only used with objects.

let truck_1: Truck = {
    wheels: 4,
    engine: 'toyota'
}

let truck_2 = {
    wheels: 8,
    engine: 'Tata',
    color: 'red'
}

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

truck_1 = truck_2 // color also get into prod, this fk prod as it compiles to js.

// here truck_1 logs 
console.log('truck1 :>> ', truck_1);


/* Optional parameter in Objects */
interface Guitarist {
    genre? : string
    songsCount: number
}

let arijitSingh: Guitarist = {
    songsCount: 4,
    genre: 'sad',
}

let atifAslam = {
    songsCount: 3,
    genre: 'melody',
}

/* 
    atifAslam = arijitSingh => gives error as undefined is not assignable to string
*/
arijitSingh = atifAslam
console.log('arijitSingh :>> ', arijitSingh);

/* 

    Error=> because firstly its a bad practice to use methods
    over optional field as it can be null/undefined
    const greet = (guitarist: Guitarist) {
        return guitarist.genre.toUpperCase;
    } 

    instead
*/
const greet = (guitarist: Guitarist) => {

    if(guitarist.genre) {
        return `Genre is ${guitarist.genre}`;
    }

    return `genre data is absent`;
} 

console.log('greet(arijitSingh) :>> ', greet(arijitSingh));

/* Enum =>
    Unlike other stuff in TS which are just extension or typed property of JS
    Enum are actually feature extension in TS.
*/

/* normally first elements starts from 0, but we can change ordering */
enum Grade{
    U=1,
    D,
    C,
    B,
    A,
}

console.log(Grade.B);

const emillaMathGrade: Grade = Grade.U
// console.log(emillaMathGrade==Grade.U);


// ------------------------------------------------------

/* Literals */

// now this name_1 literal is like const which can only be assigned to either 
// 'dave' or 'John'
let name_1: 'dave' | 'John'
name_1 = 'John'
name_1 = 'dave'
console.log(name_1);


/* Functions */


const add = function(a: number, b: number): number {
    return a + b;
}

type mathFunction = (a: number,b: number) => number;

const addV2: mathFunction = function(a, b){
    return a + b;
}

interface mathFunctionV2 {
    (a: number,b: number) : number
}

const addV3: mathFunctionV2 = (a,b) => {
    return a + b;
}

console.log(addV3(78, 79));

// optional paramters => need to be present at last of paramter declaration.

const optionalFunc = (a: number, b?: number, c?: number): number => {
    let sum: number = a

    if(typeof c !== 'undefined') {
        sum = sum + c
    }
    if(typeof b !== 'undefined') {
        sum = sum + b
    }
    console.log(a,b,c)
    return sum
}

console.log(optionalFunc(1,undefined,2));

// default paramters => 
//  > can be at any position, to remove ambiguity use undefined at places.
//  > type or interface wont work for function type declaration.

const defaultFunction = (a: number, b: number = 10, c: number): number => {
    return a + b + c
}

console.log(defaultFunction(1, undefined, -1))


// Rest Parameter -> should be at the end of param declaration.

const multiplyFunc = (a: number, ...b: (number)[]): number => {
    return a*b.reduce((prev, curr) => prev*curr)
}

console.log(multiplyFunc(1,2,3))


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

const errorMessage = (message: string): never => {
    throw Error(message)
}

/* 
    *imp
        > suppose below function , for ts we need to return never type.
*/

const stringOrNumber = (value: (string | number)): string => {

    if (typeof value === 'number') {
        return 'number'
    }
    if (typeof value === 'string') {
        return 'string'
    }

    // throw errorMessage("fked up")
    // or

    return errorMessage("nothing to return")
}

console.log(stringOrNumber(1));