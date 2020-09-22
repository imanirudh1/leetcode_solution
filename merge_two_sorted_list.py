class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
def mergeTwoLists(l1, l2):
    dummy = cur = ListNode(0)
    while l1 and l2:
        if l1.val < l2.val:
            cur.next = l1
            l1 = l1.next
        else:
            cur.next = l2
            l2 = l2.next
        cur = cur.next
    cur.next = l1 or l2
    return dummy.val
l1=ListNode(1)
l2=ListNode(2)
l3=ListNode(3)
l1.next=2
l2.next=3

l4=ListNode(1)
l5=ListNode(4)
l6=ListNode(6)
l1.next=2
l2.next=3
       
print(mergeTwoLists(l1,l4))