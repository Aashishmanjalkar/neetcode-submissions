class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}
        for(let str of strs){
            const sort = str.split('').sort().join('')
            if(hash[sort]){
                hash[sort].push(str)
            } else {
                hash[sort] = [str]
            }
        }
        return Object.values(hash);
       
    }
}
