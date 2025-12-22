/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let upper = new Array(26).fill(false);
    let lower = new Array(26).fill(false);


    for (let ch of s) {
        let code = ch.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            upper[code - 65] = true;
        } else if (code >= 97 && code <= 122) {
            lower[code - 97] = true;
        }
    }

    for (let i = 25; i >= 0; i--) {
        if (lower[i] && upper[i]) {
            return String.fromCharCode(i + 65);
        }
    }

    return ""
};

greatestLetter("yashYASH");
