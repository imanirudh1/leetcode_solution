function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
function detect_cycle(head) {
  if (!head) return false
  var slow = head
  var fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast == slow) return true
  }
  return false
}
var list1 = new ListNode(1)
var b = new ListNode(2)
list1.next = b

var c = new ListNode(3)
b.next = c
c.next = b
console.log(detect_cycle(list1))

// Python Solution

// class ListNode:
//     def __init__(self, val=0, next=None):
//         self.val = val
//         self.next = next
// def detect_cycle(headA):
//     slow = headA
//     fast = headA
//     while fast and fast.next:
//         fast = fast.next.next
//         slow = slow.next
//         if slow == fast:
//             return True
//     return False

// l1=ListNode(1)
// l2=ListNode(2)
// l3=ListNode(3)
// l1.next=l2
// l2.next=l1
// print(detect_cycle(l1))
