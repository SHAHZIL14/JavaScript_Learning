/* Whenever we are dealing with objects in javascript , 
we do not code hard!!. We always use variables as members of objects.
We can do that with using THIS keyword as it refers to the current context object in javascript.
Every object has its own this , which refers to that object.
*** In browser also we have THIS keywords object that is the whole WINDOW we are surfing the web on.
Example:- */

let client = {
    clientName:"ShahRukh",
    clientNumber:1234512345,
    clientFunc: function(){console.log(`Hey ${this.clientName}`)}
}
client.clientFunc();

// But this "THIS" keyword can not be accessed in arrow functions which are sampled below:-

function normalFunc(){
    console.log(this);
}
let arrowFunc = ()=>{
    console.log(this);
}
normalFunc();
arrowFunc();