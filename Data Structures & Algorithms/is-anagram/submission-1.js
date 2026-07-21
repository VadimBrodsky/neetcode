class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        for (let l = 0; l < s.length; l++) {
            const letterA = s[l];

            for (let k = 0; k < t.length; k++) {
                const letterB = t[k];

                if (letterA === letterB) {
                    break;
                }

                if (k === t.length - 1) {
                    return false;
                }
            }
        }
        return true;
    }
}
