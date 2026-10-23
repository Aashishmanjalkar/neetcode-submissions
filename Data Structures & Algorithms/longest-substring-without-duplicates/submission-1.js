class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let l = 0
       let max = 0
       let sett = new Set();
       for (let r = 0; r < s.length; r++) {
            while(sett.has(s[r])){
                sett.delete(s[l])
                l++;
            }
            sett.add(s[r])
            max= Math.max(max, r-l+1)
       }
       return max
    }
}
