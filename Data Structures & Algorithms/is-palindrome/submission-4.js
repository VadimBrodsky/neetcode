class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.toLowerCase().replace(/[^A-Za-z0-9]/gi, "");
        return cleanS === cleanS.split('').reverse().join('')
    }
}
