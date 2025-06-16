/* 
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

const expect = (val) => {
  return {
    toBe: (n) => (val === n) ? true : console.log("NOT EQUAL"),
    notToBe: (n) => (val !== n) ? true : console.log("THEY'RE EQUAL")
  };
};
console.log(expect(5).toBe(5));
/* 
what i learned:
In Javascript if a function returns an object you can 
immediactely call a method on that object using dot notation "."

note about closure here:
expect() fnishes executing befoe i call toBe method.
it finishes executing immediately when it returns the object with toBe and notToBe methods. "expect(5)."
The returned object’s methods (toBe, notToBe) are called after expect has finished.
*/