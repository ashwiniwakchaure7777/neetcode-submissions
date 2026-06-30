class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        let prefix = 1;
        // Calculate prefix
        for (let val of nums) {
            output.push(prefix);
            prefix *= val;
        }
        // Calculate suffix
        let suffix = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix *= nums[i + 1];
            output[i] *= suffix;
        }
        return output;
    }
}
