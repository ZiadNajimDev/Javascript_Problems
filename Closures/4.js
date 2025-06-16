/* 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
// Approach one :
const createCounter = (init) => {
  let current = init;
  return {
    increment: () => {
        current++;
      return current;
    },
    decrement: () => {
        current--;
      return current;
    },
    reset: () => {
      return (current = init);
    },
  };
};
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
/* 
2nd approach:
const createCounter = (init) => {
    let current = init;
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => (current = init)
    };
};

*/
