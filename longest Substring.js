/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l=0;
    let r=0
    const n=s.length;
    let arr=new Set()
    let count =0;
    while(r<n){
      let letter=s[r]
            if(!arr.has(letter)){
                arr.add(letter);
                count=Math.max(count,arr.size);
                r++
            }else{
                arr.delete(s[l]);
                l++
            }

        
    }
    return count;
};