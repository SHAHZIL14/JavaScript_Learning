/* We have objects in javascript to simulate real life entities .
Every object has some properties like name , and other user defined properties and
some functions or method defined within it.
It is covered with the local scope and encapsulate it.
for example:*/
let user = {
  name: null,
  age: null,
  rollNo: null,
  getter: function (name, age, rollNo) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
  },
};

console.log(typeof user,user);
user.getter("Shazil",21,"0206CS221124");
console.log(typeof user,user);
user.section = "A";
console.log(typeof user,user);


