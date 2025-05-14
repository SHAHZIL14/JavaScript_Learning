/* Whenever we are to get some information or data from other system or application
we are always in the need of fetching the response in the form of APIs Application Programming
Interface. There are some methods which are now deprecated as Xml HTTP request.Modern method
to fetch data from applications is 'fetch'.
To handle the data fetched , we have different methods:
1: By promise Chaining:-
Promises are some kinda functions which takes time to execute asyncronously and give back response
in the form of resolution or rejection.*/
console.log("Loading...");
const dbPromise = fetch("https://api.github.com/users/shahzil14");
// async function connectionToDB(dbPromise) {
//   try {
//     const response = await dbPromise;
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// connectionToDB(dbPromise);
// dbPromise.then(function(response){
//     response.json()
//     .then(function(data){
//         console.log(data.message);
//     })
//     // .catch(function(error){
//     //     console.log(error.message);
//     // })
// })
// .catch(function(reject){
//     console.log(reject.message);
// });
