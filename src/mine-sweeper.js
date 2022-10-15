const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const rows = matrix.length;
    const columns = matrix[0].length;
    const resultMatrix = Array.from(new Array(rows), () => new Array(columns));

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let amountMines = 0;

            if (matrix[row - 1]?.[col - 1]) amountMines++;
            if (matrix[row - 1]?.[col]) amountMines++;
            if (matrix[row - 1]?.[col + 1]) amountMines++;

            if (matrix[row]?.[col - 1]) amountMines++;
            if (matrix[row]?.[col + 1]) amountMines++;

            if (matrix[row + 1]?.[col - 1]) amountMines++;
            if (matrix[row + 1]?.[col]) amountMines++;
            if (matrix[row + 1]?.[col + 1]) amountMines++;

            resultMatrix[row][col] = amountMines;
        }
    }
    return resultMatrix;
}

module.exports = {
    minesweeper
};
