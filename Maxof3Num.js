/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
   
    
    nums.sort((a, b) => a-b);
    n=nums.length
     const max1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
     const max2 = nums[0] * nums[1] * nums[n - 1];
    return Math.max(max1,max2);
    
};