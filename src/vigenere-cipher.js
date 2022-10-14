const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(order = true) {
        this.direct = order;
        this._alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this._errorMsg = 'Incorrect arguments!';
    }

    encrypt = (message, key) => this._converter(message, key, true);
    decrypt = (message, key) => this._converter(message, key, false);

    _converter(message, key, encrypt) {
        if (!message || !key) throw new Error(this._errorMsg);

        message = message.toUpperCase();
        key = key.padEnd(message.length, key).toUpperCase();

        let result = [];
        let counterNotLetter = 0;
        let alpha = this._alphabet.slice();

        for (let i = 0; i < message.length; i++) {
            const indexToChange = alpha.indexOf(key[i - counterNotLetter]);
            const cut = alpha.splice(0, indexToChange);
            alpha = alpha.concat(cut);

            const index = encrypt
                ? this._alphabet.indexOf(message[i])
                : alpha.indexOf(message[i]);
            if (index !== -1) {
                const res = encrypt
                    ? alpha[index]
                    : this._alphabet[index];
                result.push( res );
            } else {
                result.push(message[i]);
                counterNotLetter++;
            }
        }
        return this.direct === false ? result.reverse().join('') : result.join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
