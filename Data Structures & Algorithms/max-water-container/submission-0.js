class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let most = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const ht = heights[left] < heights[right] ? heights[left] : heights[right];
            const wt = right - left;
            const water = ht * wt;
            if (water > most) most = water;
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return most;
    }
}
