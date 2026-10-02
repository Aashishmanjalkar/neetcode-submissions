class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = {}
        for word in s:
           if word in count:
            count[word] += 1
           else:
            count[word] = 1
        
        for word in t:
            if word not in count or count[word] == 0:
                return False

            count[word] -= 1

        return True