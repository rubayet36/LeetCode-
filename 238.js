/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     const result=[];
    for(let i =0;i<nums.length;i++){
    const nArr = [...nums]
    nArr.splice(i, 1);
    result[i] =  nArr.reduce((accumulator, current) => accumulator * current, 1);
    }
    return result;
};

//valod O(n) solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const res = [];
    const n = nums.length;
    let start = 1;
    for (let i = 0; i < n; i++) {
        res.push(start)
        start = start * nums[i]
    }
    let start2 = 1
    for (let i = n-1; i >=0 - 1; i--) {
        res[i] = start2 * res[i];
        start2 = start2 * nums[i]
    }

    return res;
};