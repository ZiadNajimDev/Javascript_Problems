const expect = (val) => {
  return {
    toBe: (n) => (val === n) ? true : console.log("NOT EQUAL"),
    notToBe: (n) => (val !== n) ? true : console.log("THEY'RE EQUAL")
  };
};
console.log(expect(5).toBe(5));