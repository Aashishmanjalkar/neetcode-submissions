class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        left = 1
        prefix = []
        for i in range(0, len(nums)):
            prefix.append(left)
            left = left * nums[i]

        right = 1
        suffix = [0] * len(nums)
        for i in range(len(nums) - 1, -1, -1):
            suffix[i] = right
            right = right * nums[i]
        
        for i in range(0, len(nums)):
            nums[i] = prefix[i] * suffix[i]

        return nums