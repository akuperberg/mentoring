/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '(' || s[i] !== ')' || s[i] !== '[' || s[i] !== ']' || s[i] !== '{' || s[i] !== '}') { return true } else { return true };
    }
};
