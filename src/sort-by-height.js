const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const indexMinis1 = [];
    arr.forEach((item, i) => {
        if (item === -1) {
            indexMinis1.push(i);
        }
    })
    arr = arr.filter(i => i > 0);
    arr.sort((a, b) => a - b);
    indexMinis1.forEach(item => arr.splice(item, 0, -1));

    return arr;
}

module.exports = {
    sortByHeight
};
