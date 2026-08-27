/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;


    while (left < right) {
        let k = right - left
        let maxArea = Math.min(height[left], height[right]) * k
        max = Math.max(max, maxArea)
        if (height[left] <= height[right]) {
            left++
        } else { right-- }




    }


    return max
};