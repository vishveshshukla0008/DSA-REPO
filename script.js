class Solution {
    is_neon(nStr) {
        // Write your code here
        let sqr = nStr ** 2;
        let sqrCopy = sqr;
        let sum = 0;
        while (sqr > 0) {
            //find last digit
            let ld = sqr % 10;

            // operation
            sum += ld;

            // remove digit
            sqr = Math.floor(sqr / 10);
        }

        return nStr === sum ? "Yes" : "No";
    }
}

module.exports = Solution;
