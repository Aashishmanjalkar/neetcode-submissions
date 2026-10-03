class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = {}
        for st in strs:
            count  = [0] * 26
            for char in st:
                count[ord(char) - 97] += 1
            
            key = "#".join(str(x) for x in count)
            
            if key not in obj:
                obj[key] = []

            obj[key].append(st)
        
        return list(obj.values())