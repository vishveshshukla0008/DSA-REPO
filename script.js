var numJewelsInStones = function (jewels, stones) {
    let s = new Set(jewels);
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (s.has(stones[i])) {
            count++;
        }
    }
    return count;
};


numJewelsInStones('aA', 'aAAbbbb')