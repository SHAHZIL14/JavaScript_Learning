/* we don't know what type of paramter we will be in need of when making project or functions we can say.
thus it might be possible that sometimes in the program or manytimes we have to deal with arrays and objects in javascript.
Thats why we have to be able to deal with that too.

Arrays in functions:-
let/const/var funcName = ('arrayParamter'){
        arrayParamter[0] is the value of first or zeroth index of array which will be given by the call of the function as an argument
        and inside the block of function work as arrayParameter.
}
Objects in functions:-
    let/const/var funcName = ('objectParameter'){
        objectParameter.'someKey' is the value of key of the object which will be given by the call of the function as an argument
        and inside the block of function work as objectParameter.
}
*/
// examples:-//

let sampleObject = {
    name:"shazil",
    number:90009080129
}

let sampleArray = [1,2,3];

let sampleFunc = (paramObject,paramArray)=>{
    console.log(`The name of user is ${paramObject.name} and his phone number is ${paramObject.number}`);
    console.log(`The first second and third value of array given is ${paramArray[0]} ${paramArray[1]} ${paramArray[2]}`);
}

sampleFunc(sampleObject,sampleArray);