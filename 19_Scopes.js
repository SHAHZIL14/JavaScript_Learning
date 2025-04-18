/* What is scope in programming?
The scope of any functions ,variable or any object is defined as the range where it can be used for any instructions in source code.
They are mostly covered with the range of {} curly braces in the javascript.
And some times the scope differs in behaviour as depends on the type of instance you are using .

for example:- If the function is defined as function 'funcName'(){} then it can be called out before defining but
if it contained in the variable and accessed before the defination of that variable , it throws error.
*/

let one = 1
console.log(one);