class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let myMap = new Map <number, number>()
        for(let i = 0; i< nums.length; i++){
            myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1)
        }
        const sorted = [...myMap].sort((a,b) => b[1] - a[1])
        return sorted.slice(0, k).map(num => num[0])
    }
}
