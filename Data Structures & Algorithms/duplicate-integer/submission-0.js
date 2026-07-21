class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const counts = {};
        for (let num of nums) {
            counts[num] ? counts[num]++ : (counts[num] = 1);
        }

        const values = Object.values(counts);

        for (let i = 0; i < values.length; i++) {
            if (values[i] > 1) {
                return true;
            }
        }
        
        return false;
    }
}
