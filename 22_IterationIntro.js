/* In any  of the programming languages. There are many cases where we 
have to write the same function again and again but with some modifications which is very limited throughout 
the function. These are done with loops or iterations.*/
//First we have loop as FOR//
const arr = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

/*Some important keywords in for loops
1. break-It is used to break the control in loop and exit it .
2. continue-It is use to skip the particular iteration in which the keyword used in.*/

//Second loop we have as WHILE loop//
/*while loop is the loop which based on one simple condition that is base and works again andd again till the condition violated
for the first time*/
let num = 1;
 while (num<=5) {
    console.log(num);
    num++;
}

/* Third ,there is one more fundamental loop we have as DO WHILE, as the name says in this loop the control of the program performed 
the instructions or set of intructions before checking the condition, hence this loop gets executed at least once even if the 
base condition of the loop is not satisfied.*/
let num1 = 5;
do{
    console.log(num1);
    num1--;
}while(num1<0);

/*Higher Order Loops especially for some specific DS:
FOR OF: For of loop use to directly iterate the value of array.Can't be applied on javascript objects*/
let newArray = ["Shazil","Harsh","Sahiba","Price",];

// FOR IN loop use to iterate with the key of the iterable.
let newObj = {
    "num1":"Shazil",
    "num2":"Sahiba",
    "num3":"Harsh"
}
for (const index in newArray) {
    console.log(newArray[index])
}
for (const key in newObj) {
    console.log(newObj[key])
;}

//ForEach a special array method, use to apply function with each value of array as an argument//
let newarr  = ["Naya mohalla","Adhartal","Gorakhpur","Sadar","Tilwara"];
newarr.forEach((arrayValue)=>{
    console.log(arrayValue);
})
