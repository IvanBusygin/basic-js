const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

    if (!Array.isArray(arr)){
        throw new Error('\'arr\' parameter must be an instance of the Array!')
    }
    let newArr = [...arr]

    for (let i = 0; i < arr.length; i++) {
        if (newArr[i] === '--discard-next') {
            delete newArr[i]
            delete newArr[i+1]
        }
        if (newArr[i] === '--discard-prev') {
            delete newArr[i]
            delete newArr[i-1]
        }
        if (newArr[i] === '--double-next') {
            newArr.splice(i, 1, newArr[i+1])
        }
        if (newArr[i] === '--double-prev') {
            newArr.splice(i, 1, newArr[i-1])
        }
    }
    return newArr.filter( i => i)

// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next дублирует следующий элемент массива в преобразованном массиве.
// --double-prev дублирует предыдущий элемент массива в преобразованном массиве.
}

module.exports = {
  transform
};
