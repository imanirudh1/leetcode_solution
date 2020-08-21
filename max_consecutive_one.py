def cons_num(nums):
    cnt, res = 0, 0
    for i in nums:
        if i == 1:
            cnt += 1
        else:
            res = max(res, cnt)
            cnt = 0    
    return res
print(cons_num([1,1,1,1,0,1]))    