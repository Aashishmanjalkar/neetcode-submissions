class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        for i in range(0, len(nums)):
            count[nums[i]] = ((count.get(nums[i]) or 0) + 1)

        sortedFreq = dict(sorted(count.items(), key=lambda item: item[1], reverse=True))
        sliced =  dict(islice(sortedFreq.items(), 0, k))
        return list(sliced.keys())     
        