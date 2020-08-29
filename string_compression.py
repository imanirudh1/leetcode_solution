chars=["a","a","b","b","c","c","c"]
# def compress(chars):
#         counter=1
#         i=1
#         r=''
#         while i<len(chars):
#             if chars[i]==chars[i-1]:
#                 counter+=1
#             else:
#                 r=r+chars[i-1]+str(counter)
#                 counter=1
#             i+=1
#         r=r+chars[i-1]+str(counter)
#         chars=list(r)
#         return chars


def compress(chars):
    i, j = 0, 0
    while j < len(chars):
        cur = chars[j]
        cnt = 0
        while j < len(chars) and chars[j] == cur:
            j += 1
            cnt += 1
        chars[i] = cur
        i += 1
        if cnt > 1:
            cnt_str = list(str(cnt))
            for s in cnt_str:
                chars[i] = s
                i += 1
    return i

print(compress(chars))        