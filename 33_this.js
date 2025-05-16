/*In javascript we have keyword called as 'this'.
It is use in functions especially and objects sometimes to make the js engine know 
about which context you are talking about, either this object or other object.*/

/* for example:-
function user(name,age,gender){
    this.name = name; //
    this.age = age; // in this line , this keyword denotes that we talk about a variable inside this function user, and the variable in the left hand side is the paramter given by the time of call//
    this.gender = gender; //
};
let user1 = new user("Shazil",21,"M");
console.log(user1);
*/

/* Now what if we have another function call inside the main or object function like the above scenario?
for example:-*/
// function usernameSetter(username){
//     this.username = username;
// }
// function mainFunc(username,age,email,gender){
//     usernameSetter.call(this,username);
//     this.age = age;
//     this.email = email;
//     this.gender = gender;
// }
// console.log(typeof mainFunc);
// let newUser = new mainFunc("Shazil",21,"shazilraza8@gmail.com","M");
// console.log(newUser);f