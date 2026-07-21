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
                const small = Math.min(hash[num], hash[complement]);
                const large = Math.max(hash[num], hash[complement]);

                if (small == large) break;
                return [small, large];
            }
        }

        return [];
    }
}
