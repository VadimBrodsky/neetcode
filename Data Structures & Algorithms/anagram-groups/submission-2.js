class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = [];
        for (let i = 0; i < strs.length; i++) {
            const wordA = strs[i];
            if (wordA === null) continue;
            const pairs = [wordA];

            for (let j = i + 1; j < strs.length; j++) {
                const wordB = strs[j];
                if (wordB === null) continue;

                if (this.isAnagram(wordA, wordB)) {
                    pairs.push(wordB);
                    strs[j] = null;
                }
            }

            anagrams.push(pairs);
        }

        return anagrams;
    }

    isAnagram(wordA, wordB) {
        return wordA.split("").sort().join("") === wordB.split("").sort().join("");
    }
}
