/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  const initialValue = init;
  return {
    increment: function () {
      return (init += 1);
    },
    reset: function () {
      return (init = initialValue);
    },
    decrement: function () {
      return (init -= 1);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
