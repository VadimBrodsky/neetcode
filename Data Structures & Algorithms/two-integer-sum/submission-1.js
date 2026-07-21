class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = nums.reduce((acc, num, i) => {
            acc[num] = i;
            return acc;
        }, {});

        for (let num in hash) {
            const complement = Math.abs(target - num);
            if (hash[complement]) {
                return [hash[num], hash[complement]];
            }
        }

        return [];
    }
}
