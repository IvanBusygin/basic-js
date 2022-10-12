const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let str = ''
    if (Array.isArray(members)) {
        for (const strElement of members) {
            if (typeof strElement === 'string') {
                str += strElement.trim().slice(0, 1).toUpperCase();
            }
        }
        str = [...str].sort((a, b) => a.localeCompare(b)).join('');
    }
    return str.length === 0 ? false : str;
}

module.exports = {
  createDreamTeam
};
