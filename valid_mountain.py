A=[0,3,2,1]
def valid_mountain(a):
    N = len(A)
    i = 0
    while i+1 < N and A[i] < A[i+1]:
        i += 1
    if i == 0 or i == N-1:
        return False
    while i+1 < N and A[i] > A[i+1]:
        i += 1

    return i == N-1             

print(valid_mountain(A))