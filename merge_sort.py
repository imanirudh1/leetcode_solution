 
nums1 = [1,2,3,0,0,0] 
m = 3
nums2 = [2,5,6]
n = 3
def merge_sort(num1,m,num2,n):
    while n > 0:
        if m <= 0 or nums2[n-1] >= nums1[m-1]:  
            nums1[m+n-1] = nums2[n-1]
            n -= 1
        else:
            nums1[m+n-1] = nums1[m-1]
            m -= 1
    return num1        
print(merge_sort(nums1,m,nums2,n)) 

# def merge_sort(num1,m,num2,n):
#     for i in range(n):
#             num1[i+m] = num2[i]
#     for i in range(0,m+n):
#         for j in range(i,0,-1):
#             if num1[j]< num1[j-1]:
#                 temp=num1[j]
#                 num1[j]=num1[j-1]
#                 num1[j-1]=temp        
            
#     return num1       
# print(merge_sort(nums1,m,nums2,n))    



# for i in range(n):
#     nums1[i+m] = nums2[i]
# nums1.sort()