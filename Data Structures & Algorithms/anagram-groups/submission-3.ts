class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hash : Record < string , string[]> = {};
        for(let str of strs){
            let count = new Array(26).fill(0)
            for(let char of str){
                count[char.charCodeAt(0) - 97]++
            }
            let hashKey = count.join("#")
            if(!hash[hashKey]){
                hash[hashKey] = []
            }
            hash[hashKey].push(str)
        }
        return Object.values(hash)
    }
}
