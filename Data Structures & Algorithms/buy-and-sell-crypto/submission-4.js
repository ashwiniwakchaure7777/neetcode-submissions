class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        const n = prices.length;
        for (let i = 0; i < n; i++) {
        let j = n - 1;
            while (i < j) {
                const diff = prices[j] - prices[i];
                if (profit < diff) profit = diff;
                j--;
            }
        }
        return profit;
    }
}
