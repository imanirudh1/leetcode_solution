def searchInsert(nums, target):
        if target in nums:
            return nums.index(target)
        for i in range(0,len(nums)):
            if target < nums[i]:
                return i
        return len(nums)    

nums=[1,2,3,4]
target=5
print(searchInsert(nums,target))