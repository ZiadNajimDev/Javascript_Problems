/* 
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

const greaterThanTen = (arr) => {
  if (arr > 10) {
    return arr;
  }
};
const filter = (arr, greaterThanTen) => {
  const idk = [];
  for (let i = 0; i < arr.length; i++) {
    if (greaterThanTen(arr[i])) {
    //   idk[i] = greaterThanTen(arr[i]);  this is wrong because on idk[1] this index will get skipped and will stay empty
    idk[i].push(arr[i]); // this is the right way. we push the value to the next available empty index 
    }
  }
  return idk;
};

const myVar = filter([20, 2, 11], greaterThanTen);
console.log(myVar[1]);
