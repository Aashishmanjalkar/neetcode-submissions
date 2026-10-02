class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(0, len(nums)):
            findNum = target - nums[i]
            if findNum in hash:
                return [hash[findNum], i]

            hash[nums[i]] = i