class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs && strs.length == 0) return ""

        let encoder = ""
        for(let i = 0; i< strs.length ;i++){
            let length = strs[i].length
            encoder = encoder.concat(length, "#", strs[i])
        }
        return encoder
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length == 0) return []

        let i = 0 
        let res = []
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j), 10);
            let s = str.substring(j + 1, j + 1 + length);
            res.push(s);
            i = j + 1 + length;
        }
        return res
    }
}
