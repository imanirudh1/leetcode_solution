nums=[2,7,11,23]
target=9
def twoSum(nums, target):
        d = {}
        for i, n in enumerate(nums):
            m = target - n
            if m in d:
                return [d[m], i]
            else:
                d[n] = i
print(twoSum(nums,target))                