nums = [1,1,2]
def remove_dublicate(nums):
    len_ = 1
    if len(nums)==0:
        return 0
    for i in range(1,len(nums)):
        if nums[i] != nums[i-1]:
            nums[len_] = nums[i]
            len_ +=1
    return len_
print(remove_dublicate(nums))