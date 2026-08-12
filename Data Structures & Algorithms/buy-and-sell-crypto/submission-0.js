class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        for (let pointA = 0; pointA < prices.length; pointA++) {
            for (let pointB = pointA + 1; pointB < prices.length; pointB++) {
                maxProfit = Math.max(maxProfit, prices[pointB] - prices[pointA])
            }
        }
        return maxProfit;
    }
}
