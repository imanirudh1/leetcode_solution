import timeit
def dublicate_zero(arr):
    code_to_test="""
    for i in range(len(arr)-1,-1,-1):
        if arr[i]==0:
            arr.pop()
            arr.insert(i,0)                      
    """
    elapsed_time = timeit.timeit(code_to_test, number=100)/100
    print(elapsed_time)
    return arr        
 
a=[1,0,2,3,0,4,5,0]
print(dublicate_zero(a)) 

