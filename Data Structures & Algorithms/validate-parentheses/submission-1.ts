class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let mapping : { [key : string]: string} = {
            "]" : "[",
            "}" : "{",
            ")" : "("
        }
        let stack:string[] = []
        for(let c of s){
            if(mapping[c]){
                let topElement = stack.pop()
                if(topElement != mapping[c]){
                    return false
                }
            }else{
                stack.push(c)
            }
        }
        return stack.length == 0
    }
}
