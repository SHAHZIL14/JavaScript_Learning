/*  This is the second way to implement objects in JavaScript .
It is by constructor:-
*/

let newObj1 = {
    name:"Shazil",
    phone:900906754
};
let newObj2= {
    name:"sultan",
    phone:12341223412
};
let newObj3 = {
    name:"sahiba",
    phone:'kissme'
};

// console.table([newObj1,newObj2,newObj3]);

let obj4  = Object.assign({},newObj1,newObj2,newObj3);
console.log(obj4);

console.log(Object.keys(newObj2))
console.log(Object.values(newObj2))