class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length < 2 || nums.length >1000) return false;

        const map = new Map();
        console.log(map);

    for(let i =0; i< nums.length;i++){
        const compliment = target - nums[i];

        if(map.has(compliment)){
            return [map.get(compliment),i]
        }
        map.set(nums[i],i)
    }
 return false;

    }
}
