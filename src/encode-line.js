const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let num = 1;
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            num++;
        } else if (num === 1) {
            res = res + `${str[i]}`;
        } else {
            res = res + `${num}${str[i]}`;
            num = 1;
        }
    }
    return res;
}

module.exports = {
    encodeLine
};
