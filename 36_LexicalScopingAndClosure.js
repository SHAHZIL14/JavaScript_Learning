/* Lexical scoping leads to the fact of jsvsacript execution,
that a function always remember the variable of lexical environment irrespective of
the environment it gets called.
for example we have two functions:-*/

function outer(){
    let outerVariable = 10;
    return function (){
        outerVariable++;
        console.log(outerVariable);
    }
}
const third = outer();
third();
third();
third();

/*In the above example after executing function 'outer'
the context of 'outer' function will get finished , but as it returns another function 
reference as of 'inner' function which we have hold inside 'third' variable.So as of
closure property the whenever inner function gets called i.e the third function, it still
increment the outer variable even though the function outer context is no more in the memory
but because of closure property when we return the inner function it also returns the lexical
scope of the function in which outervariable have also returned*/
