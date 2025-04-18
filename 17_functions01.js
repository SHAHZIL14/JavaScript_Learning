/* Functions in any programming languages irrespective of the type of language are 
basically a packed block of code which performs some sort of operations with the
parameter functions are defined within. They are used to reduce the redunduncy of the code 
by avoiding the writing of some piece of code again and again, instead the piece of code
defined inside the block of functions , and used multiple times thoughout the program by just
calling the functions by their name with the argument you to want to make the code executed on.*/

/* Syntax of functions in javascript:-
1. funtion 'funcName'(parameter1,parameter2,parameter3,....paramterN){
    // piece of code or operations on paramters taken by the function//
};
2. var/let/const'funcName'=(parameter1,parameter2,parameter3,....paramterN)=>{
    // piece of code or operations on paramters taken by the function//
};
*/

/* NEW: if any parameter of the function would be taken as default i would be defined like:-
 function 'funcName'(parameter='defaultValue'){
     // piece of code or operations on paramters taken by the function//
};
*/
console.log("s");
console.log("h");
console.log("a");
console.log("z");
console.log("i");
console.log("l");
// instead of calling the item again and again wrap it inside the function

function myName() {
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("z");
    console.log("i");
    console.log("l");
};

myName();//calling of the function would be like adding () paranthesis after function name//