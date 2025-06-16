/* Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */
const createHelloWorld =  () => {
    return function() {
        return "hello world";
    }
}
const f = createHelloWorld();
f();
// what i learned 
/* 
a closer is when an inner function remember variables from its outer function even after outer function finishes running
function outer() {
    let message = "Hello";  // Variable in outer function
    
    return function inner() {
        return message;     // Inner function "remembers" message
    }
}

const f = outer();  // outer() finishes, but...
console.log(f());   // "Hello" - inner still remembers message!

*/