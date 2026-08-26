/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let left=0;
    let right =s.length-1;

    const isAlpha=(char)=>{
        return /^[a-zA-Z0-9]$/.test(char);
    }

    while(left<right){
        if(!isAlpha(s[left])){
            left++
        }
        else if(!isAlpha(s[right])){
            right --
        }
        else{
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }
            left ++
            right--
        }
        
    }
    return true
};