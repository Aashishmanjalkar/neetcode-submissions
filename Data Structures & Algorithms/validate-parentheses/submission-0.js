class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let validParenthesis = {
            "]" : "[",
            "}" : "{",
            ")" : "("
        }
        let stack = []
        for(let c of s){
            if(validParenthesis[c]){
                const topElement = stack.pop()
                if(topElement !== validParenthesis[c]){
                    return false
                }
            } else {
                stack.push(c)
            }
        }
        return stack.length == 0
    }
}
