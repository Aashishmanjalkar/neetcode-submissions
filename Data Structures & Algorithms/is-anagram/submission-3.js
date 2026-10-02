class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        // let myMap = new Map()
        // for(let word of s){
        //     if(myMap.has(word)){
        //         myMap.set(word, myMap.get(word) + 1)
        //     }else{
        //         myMap.set(word,1)
        //     }
        // }
        // for(let word of t){
        //     if(myMap.has(word) && myMap.get(word) >= 1){
        //         myMap.set(word, myMap.get(word) - 1)
        //     }else{
        //         return false
        //     }
        // }
        // return true
        const count = {}
        for(let word of s){
            count[word] = (count[word] || 0 ) + 1
        }
        for(let word of t){
            if(!count[word]) return false
            count[word]--
        }
        return true
    }
}
