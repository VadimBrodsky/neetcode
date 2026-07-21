class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const countsS = this.countLetters(s);
        const countsT = this.countLetters(t);

        for (let key in countsS) {
            if (countsS[key] !== countsT[key]) {
                return false;
            }
        }

        return true;
    }

    countLetters(s) {
        const counts = {};
        for (let i = 0; i < s.length; i++) {
            counts[s[i]] ? counts[s[i]]++ : (counts[s[i]] = 1);
        }
        return counts;
    }
}
