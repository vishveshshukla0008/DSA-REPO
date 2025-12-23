/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    let freqS = {};
    let freqT = {};

    // frequency of s
    for (let ch of s) {
        freqS[ch] = (freqS[ch] || 0) + 1;
    }

    // frequency of target
    for (let ch of target) {
        freqT[ch] = (freqT[ch] || 0) + 1;
    }

    console.log(freqS)
    console.log(freqT)
        let min = Infinity;
    
        for (let ch in freqT) {
            if (!freqS[ch]) return 0;
            min = Math.min(min, Math.floor(freqS[ch] / freqT[ch]));
        }
    
        return min;
};  


console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));