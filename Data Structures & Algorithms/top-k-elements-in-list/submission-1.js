class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count the frequencies
        const count = nums.reduce((acc, i) => {
            acc[i] = (acc[i] || 0) + 1;
            return acc;
        }, {});

        // create a bucket
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        // populate the bucket
        for (let n in count) {
            freq[count[n]].push(parseInt(n));
        }

        // pick to the top k
        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (let n of freq[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}
