/* Given an integer n, return a counter function. This counter function initially 
returns n and then returns 1 more than the previous value every 
subsequent time it is called (n, n + 1, n + 2, etc).
 */
const letsCount = (n) => {
    return function Counter () {
        return n++;
    }
}
let myVar = 10;
let f = letsCount(myVar);
console.log(f());
console.log(f());
console.log(f());

/* 
what i learned:
lets say we have n = 5;
console.log(n + 1); returns 6 but n stays 5
console.log(++n); returns 6 and n becomes 6
console.log(n++); returns 5 first and n becomes 6 

what i did wrong:
const letsCount = (n) => {
    return function Counter (n) {  this shadows the first parameter
        return n + 1; this doesnt increment anything as mentioned above
    }
}

*/