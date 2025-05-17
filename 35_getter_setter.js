/* In almost every time during production 
we always deal with classes and object of different
types. In many cases we just don't want to expose 
classes properties to every one using objects of it like
password , pin , address and more. So we use getters.
It is a method that gives the property to the object user of the class
according to the programmer that defines the method.
And sometimes user want to set the crucial values like password , email
that must be validate before storing inside the object, thus 
we use setter method that takes value from user and make validation
operations on the value and store the actual value inside the object.
*/
// class user{
//     #password;
//     constructor(name,email,password){
//         this.name = name;
//         this.#password = password;
//         this.email = email;
//     }
//     get password(){
//         return "flsnlsn".concat((`${this._password}`.concat("abshdbskf")));
//     }
// }

// let user1 = new user("Shazil","shazil@123.com","123123");
// // console.log(user1.name);
// // console.log(user1.#password);
// console.log(user1.password);
// console.log(user1.email);

class user {
  #password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }
  get password() {
    return "asgdh".concat(this.#password.toString().concat("adhaldhl"));
  }
  set password(newPassword) {
    try {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^+=])[A-Za-z\d@$!%*?&#^+=]{8,}$/;
      if (regex.test(newPassword)) this.#password = newPassword;
      else throw new Error("Not a valid password");
    } catch (error) {
      console.log(error);
    }
  }
}
let user1 = new user("Shazil", "shah@abc.com", "123123");
user1.password = "iamShah@2025";
console.log("Password : ", user1.password);
