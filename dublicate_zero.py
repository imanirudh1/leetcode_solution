
a=[1,0,2,3,0,4,5,0]
def dublicate_zero(arr):
    for i in range(len(arr)-1,-1,-1):
        if arr[i]==0:
            arr.pop()
            arr.insert(i,0)                      
    return arr        
print(dublicate_zero(a))    
