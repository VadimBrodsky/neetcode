class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.toLowerCase().replace(/[^A-Za-z0-9]/gi, "");
        console.log({ cleanS });

        let pointA = 0;
        let pointB = cleanS.length - 1;

        while (pointA < pointB) {
            if (cleanS[pointA] !== cleanS[pointB]) return false;
            pointA++;
            pointB--;
        }

        return true;
    }
}
