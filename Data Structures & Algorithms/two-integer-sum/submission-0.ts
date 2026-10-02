class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const count:{[key: number] : number} = {}
        for(let i = 0; i < nums.length; i++){
            let findNum = target - nums[i]
            if(findNum in count){
                return [count[findNum], i]
            }
            count[nums[i]] = i
        }
    }
}
