class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        const lmax = new Array(n);
        const rmax = new Array(n);
        lmax[0] = height[0];
        rmax[n - 1] = height[n - 1];
        let water = 0;
        for (let i = 1; i < n; i++) {
            lmax[i] = Math.max(height[i], lmax[i - 1]);
        }
        for (let i = n - 2; i >= 0; i--) {
            rmax[i] = Math.max(height[i], rmax[i + 1]);
        }
        for (let i = 0; i < n; i++) {
            water += Math.min(lmax[i], rmax[i]) - height[i];
        }
        return water;
    }
}
