const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 0, maxDepth = 0) {
    depth += Array.isArray(arr) ? 1 : 0;
    maxDepth = (depth > maxDepth) ? depth : maxDepth;
    arr.forEach((item) => {
      maxDepth = Array.isArray(item) ? this.calculateDepth(item, depth, maxDepth) : maxDepth;
    })
    return maxDepth
  }
}

module.exports = {
  DepthCalculator
};
