class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maximum = 0
        for(let i = 0; i < prices.length;i++){
            for(let j = i+1; j < prices.length;j++){
                // console.log(prices[j] , prices[i])
                if(prices[j] > prices[i]){
                    let div = prices[j] - prices[i]
                    maximum = Math.max(div, maximum)
                }
            }
        }
       return maximum
    }
}
