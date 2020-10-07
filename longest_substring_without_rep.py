def lengthOfLongestSubstring(s):
    start = maxLength = 0
    usedChar = {}
    for i in range(len(s)):
        if s[i] in usedChar and start <= usedChar[s[i]]:
            start = usedChar[s[i]] + 1
            print('start ',start)
        else:
            maxLength = max(maxLength, i - start + 1)
            print('maxlength ',maxLength)
        usedChar[s[i]] = i
        print(usedChar)
    return maxLength    
s =  "pwwkewae"      
print(lengthOfLongestSubstring(s))