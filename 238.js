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