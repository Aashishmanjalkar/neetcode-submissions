class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        let count: {[key: string] : number} = {}
        for(const word of s){
            count[word] = (count[word] || 0) + 1
        }   
        for(const word of t){
            if(!count[word]){
                return false
            }
            count[word]--
        }
        return true
    }
}
