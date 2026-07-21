class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let k = i + 1; k < nums.length; k++) {
                const numA = nums[i];
                const numB = nums[k];

                if (numA + numB === target && i !== k) {
                    return [i, k];
                }
            }
        }
        return [];
    }
}
