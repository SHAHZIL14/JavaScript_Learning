/* There are two ways of implementing objects in javascript:-

1 By contructor:
Object.create();

2. By Object literals:

let 'objectName' = {
 key:"value" //Seperated By Comma,
 key:"value" //Seperated By Comma,
 key:"value" //Seperated By Comma,
 key:"value" //Seperated By Comma,
 key:"value" //Seperated By Comma,
}
Only difference is the singleton

for example: 
let userProfile = {
    name:"Shazil",
    ph-no:9009080129,
    email: "shazilraza1234@youtube.com" 
};
*/
const userProfile = {
    name:"Shazil",
    phone:9009080129,
    email: "shazilraza1234@youtube.com",
    myFn: function(){console.log(`Hello ${this.name}`)}
};
userProfile.myFn();



