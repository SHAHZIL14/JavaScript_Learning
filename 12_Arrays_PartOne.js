/* Array is a data type in javascript .
It is the object in actual.
Array is the sequential collection of members.
It is represented as a list.
Implementation:-
let/var/const 'ArrayName' = [Members Seperated By Comma , Members Seperated By Comma];

Some of the important method attached with Array Object:-

1 .push(x): Pushes the value x in the last postion or index of an array.
2 .pop(): Pops out the element from the last index of an array.
3 .includes(x): It returns boolean value as the given argument x is in the array or not.
4 .indexOf(x): It returns the index as an integer of the value of argument x.
5 .slice(x,y): It returns new Array from the array including the elements from the index range x->y.
6 .splice(x,y): It returns new Array from the array and modifies it excluding those elements only in the range from x->y including y.
*/
let arr = [1,2,4,5,6,7,8,9,10];
arr.push(11);console.log(arr);
arr.pop();console.log(arr);
console.log(arr.includes(4));
console.log(arr.indexOf(4));
console.log(arr.slice(1,5));console.log(arr);
console.log(arr.splice(1,5));console.log(arr);