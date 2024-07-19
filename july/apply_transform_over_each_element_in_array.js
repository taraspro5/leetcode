/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i], i);
  }
  return newArray;
};

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);
