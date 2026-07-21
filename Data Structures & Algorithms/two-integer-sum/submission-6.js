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

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (hash[complement] && hash[complement] !== i) {
                return [i, hash[complement]];
            }
        }

        return [];
    }
}
