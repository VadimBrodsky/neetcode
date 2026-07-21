class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const result = [];
        for (let i = 0; i < numbers.length; i++) {
            for (let k = i + 1; k < numbers.length; k++) {
                const difference = numbers[i] + numbers[k] - target;

                if (difference === 0) {
                    return [i + 1, k + 1];
                }

                if (difference > 0) {
                    break;
                }
            }
        }
        return result;
    }
}
