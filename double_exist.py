arr = [2,0,10,-19,4,6,-8]
def double_check(arr):
    seen = set()
    for i in arr:
        if 2 * i in seen or i / 2 in seen: 
            return True
        seen.add(i)
    return False        
print(double_check(arr))                