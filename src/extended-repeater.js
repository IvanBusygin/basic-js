const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str = 'nul', options) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options;
    if (str === null) {
        str = 'null'
    }
    if (addition === null) {
        addition = 'null'
    }

    let newStr = '';
    let arrStr = new Array(repeatTimes)

    let arrAddition = new Array(additionRepeatTimes)
    arrAddition.fill(addition)
    const additionStr = arrAddition.join(additionSeparator)

    arrStr.fill(str + additionStr)
    newStr += arrStr.join(separator)
    return newStr

}

module.exports = {
    repeater
};
