nums=[12,3,4,2,4567]
def find_even(nums):
    count=0
    for i in nums:
        a=str(i)
        if len(a)%2 == 0:
            count += 1
    return count 

print(find_even(nums))       
