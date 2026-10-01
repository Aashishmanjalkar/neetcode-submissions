class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const myMap = new Map<number, number>();
        for(let i = 0; i < nums.length; i++){
            if( myMap.has(nums[i])){
                return true
            }else{
                myMap.set(nums[i], 1)
            }
        }
        return false
    }
}
