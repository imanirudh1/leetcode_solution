def isValid(s):
    startparen={'(','{','['}
    pair={('(',')'),('[',']'),('{','}')}
    bracket=[]
    if s[0] not in startparen or s =='':
        return False
    for i in s:
        if i in startparen:
            bracket.append(i)
        else:
            if len(bracket)==0:
                return False
            last=bracket.pop()
            if (last,i) not in pair:
                return False
    if len(bracket)!=0:
        return False
    return True


s = "()}}"
print(isValid(s))
