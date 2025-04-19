/* IIFE stands for immediately invoked function expression.
They are the function which are called just after defining in the program.
They are use to avoid global function polution problem.
*/
(function firstFunc(name){
    console.log(`${name}`);
})('Husnain');

((name)=>{
    console.log(`${name}`);
})('harsh');