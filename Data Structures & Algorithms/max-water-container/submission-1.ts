class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l: number = 0
        let r: number = heights.length - 1
        let max:number = 0
        while(l < r){
            let area:number = (r-l) * Math.min(heights[l], heights[r])
            if(heights[l] < heights[r]){
                l++
            }else{
                r--
            }
            max = Math.max(max, area)
        }
        return max
    }
}
