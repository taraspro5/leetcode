/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (beVal) {
      if (beVal === val) {
        return true;
      } else {
        return "Not Equal";
      }
    },
    notToBe: function (notToBeVal) {
      if (notToBeVal !== val) {
        return true;
      } else {
        return "Equal";
      }
    },
  };
};

// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
