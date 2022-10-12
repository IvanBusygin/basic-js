const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let num = 0;
    for (const matrix1 of matrix) {
        for (const matrix1Element of matrix1) {
            if (matrix1Element === '^^') {
                num++
            }
        }
    }
    return num
}

module.exports = {
    countCats
};
