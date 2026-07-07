class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        const n = prices.length;
        let min = prices[0];
        for (let i = 0; i < n; i++) {
            if(min>prices[i]) min = prices[i];
            const diff = prices[i]-min;
            if(diff>profit)profit = diff
        
        }
        return profit;
    }
}
