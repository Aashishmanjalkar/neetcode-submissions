class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let left:number = 1
        let prefix : number[] = []
        for(let i = 0; i < nums.length; i++){
            prefix.push(left)
            left *= nums[i]
        }

        let right:number = 1
        let suffix: number[] = new Array(nums.length)
        for(let i = nums.length - 1; i >= 0; i--){
            suffix[i] = right
            right *= nums[i]
        }
        for(let i in nums){
            nums[i] = prefix[i] * suffix[i]
        }
        return nums
    }
}
