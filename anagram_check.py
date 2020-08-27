s1='aabb'
s2='bbaa'
def anagram_check(s1,s2):
    s1=s1.replace(' ','').lower()
    s2=s2.replace(' ','').lower()

    d={}

    for letter in s1:
        if letter in d:
            d[letter] += 1
        else:
            d[letter]=1    
    for letter in s2:
        if letter in d:
            d[letter] -= 1
        else:
            return False  
    for k in d:
        if d[k]!=0:
            return False
    return True

print(anagram_check(s1,s2))
'''
Method 2:
'''
# def isAnagram(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False
        
#         for c in set(s):
#             count_s = s.count(c)
#             count_t = t.count(c)
            
#             if count_s != count_t:
#                 return False
            
#         return True