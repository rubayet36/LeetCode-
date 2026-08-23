/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counts = {};

    for (const num of nums) {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

   
    const sortedKeys = Object.keys(counts).sort((a, b) => {
        return counts[b] - counts[a]; 
    });

    
    return sortedKeys.slice(0, k).map(Number);
};