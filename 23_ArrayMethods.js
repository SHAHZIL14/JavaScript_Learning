/* As we saw some important loops for the iteration purpose of arrays and objects.
But these loops as FOR OF , FOREACH doesn't return the value or any object, which can be disgusting when programming long logics
Thus we have some more array methods attcahed with the array object.

1. MAP:It applies the callback function to every element of an array and return new array of the modified version of the previous array.

let array1 = [1,2,3,4,5,6,7,8,9,10];

let newArray1 = array1.map(function (element){ return element+10});

                    OR

let newArray1 = array1.map((element)=>{ return element+10});
                    OR

let newArray1 = array1.map((element)=>(element+10));

                    OR

 let newArray1 = array1.map((element)=>element+10);

                    OR

function callbackMap(element){return element+10}
let newArray1 = array1.map(callbackMap)

2. FILTER: As the name says itself the filter method of array , takes a callback function and returns a new array
containing only those elements which satisfies the condition given by the callback function
let array1 = [1,2,3,4,5,6,7,8,9,10];

let newArray1 = array1.filter(function(element){return element>5});

                    OR
let newArray1 = array1.filter((element)=>{return element>5});

                    OR
let newArray1 = array1.filter((element)=>(element>5));

                    OR
let newArray1 = array1.filter((element)=>element>5);

                    OR
function callbackFilter(element){return element>5}
let newArray1 = array1.filter(callbackFilter);

3. REDUCE :It is one of the useful methods of array , it takes a callback function which have two parameter as
accumulator and currentvalue , and a initial value as where to start accumulation from , and looping the whole array
and reduce it to the final single value depending on the logic resides inside the callback function and returns it.

let array1 = [1,2,3,4,5,6,7,8,9,10];
let newArray1 = array1.reduce(function(accumulatedValue,currentValue){return currentValue+accumulatedValue},0);

                        OR
let newArray1 = array1.reduce((accumulatedValue,currentValue)=>{return currentValue+accumulatedValue},0);

                        OR
let newArray1 = array1.reduce((accumulatedValue,currentValue)=>(currentValue+accumulatedValue),0);

                        OR
let newArray1 = array1.reduce((accumulatedValue,currentValue)=>currentValue+accumulatedValue,0);

                        OR
function callbackReduce(accumulatedValue,currentValue){return currentValue+accumulatedValue}
let newArray1 = array1.reduce(callbackReduce,0);
*/

