function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function intersection_point(headA, headB) {
  var list1 = headA
  var list2 = headB
  if (!list1 || !list2) {
    return null
  }
  while (list1 != list2) {
    list1 = list1 == null ? headB : list1.next
    list2 = list2 == null ? headA : list2.next
  }
  return list1.val
}

var list1 = new ListNode(4)
var a = new ListNode(1)
list1.next = a
var b = new ListNode(8)
a.next = b
var c = new ListNode(4)
b.next = c
c.next = new ListNode(5)
var list2 = new ListNode(5)
var d = new ListNode(6)
list2.next = d
var e = new ListNode(1)
d.next = e
e.next = b

console.log(intersection_point(list1, list2))

//Python Solution
// class ListNode:
//     def __init__(self, val=0, next=None):
//         self.val = val
//         self.next = next
// def getIntersectionNode(headA, headB):
//     if not headA or not headB:
//         return None

//     p,q = headA , headB
//     while p and q and p != q :
//         p = p.next
//         q = q.next
//         if p == q :
//             return q.val
//         if not p :
//             p = headB
//         if not q :
//             q = headA
//     return p.val

// l1=ListNode(1)
// l2=ListNode(2)
// l3=ListNode(3)
// l1.next=l2
// l2.next=l3

// l4=ListNode(1)
// l5=ListNode(4)
// l6=ListNode(6)
// l4.next=l2
// print(getIntersectionNode(l1,l4))
