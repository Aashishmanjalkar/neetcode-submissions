class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let r = s.replace(/[^a-zA-Z0-9]/g , "").toLowerCase()
        return r === r.split("").reverse().join("")
    }
}
