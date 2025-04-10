// There are fundamentals two types of Data in JavaScript//

// Primitive Data Types//

let number = 50;
let nothing =null;
let string ="A sample string";
let symbol = Symbol("A symbol");
let boolean  = true||false;
let bigInteger = BigInt(1234555555);
let notDefined = undefined;

console.table([typeof(number),typeof(nothing),typeof(symbol),typeof(string),typeof(boolean),typeof(bigInteger),typeof(notDefined)]);

// Non-Primitive //

let array = [1,2,4,5,6,7];

let object = {key:"value"};

console.table([array,object]);