const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const rows = matrix.length;
    const columns = matrix[0].length;
    let sum = 0;

    outer: for (let col = 0; col < columns; col++) {
        for (let row = 0; row < rows; row++) {
            const num = matrix[row][col];
            if (num === 0) continue outer;
            sum += num;
        }
    }
    return sum;
}

module.exports = {
    getMatrixElementsSum
};
