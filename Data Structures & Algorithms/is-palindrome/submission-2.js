class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let r = s.replace(/[^a-zA-Z0-9]/g , "").toLowerCase()
        let left = 0
        let right = r.length -1
        while(left < right){
            if(r[left] !== r[right]){
                return false
            }
            left++
            right--
        }
        return true
        // return r === r.split("").reverse().join("")
    }
}
