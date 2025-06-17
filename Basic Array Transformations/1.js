/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/

const SumBothNumbers = (arr) => {
  return arr + 1;
}
const map = (arr , fn) => {
    let  backupArray = [];
    for(let i = 0; i < arr.length ; i++){
         backupArray[i] = SumBothNumbers(arr[i]);
    }
    return backupArray;
  }

console.log(map([1,2,3] , SumBothNumbers));
