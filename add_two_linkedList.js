function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var addTwoNumbers = function (l1, l2) {
  var head = new ListNode()
  var pos = head
  var carry = 0
  while (l1 != null || l2 != null) {
    if (l1) {
      carry += l1.val
      l1 = l1.next
    }
    if (l2) {
      carry += l2.val
      l2 = l2.next
    }
    head.next = new ListNode(carry % 10)
    head = head.next
    carry = Math.floor(carry / 10)
  }
  if (carry > 0) {
    head.next = new ListNode(carry)
  }
  var output = ''
  pos = pos.next
  while (pos) {
    if (pos.next == null) {
      output += pos.val
    } else {
      output += pos.val + ' -> '
    }
    pos = pos.next
  }
  return output
}

var list1 = new ListNode(2)
list1.next = new ListNode(3)
list1.next.next = new ListNode(4)
var list2 = new ListNode(2)
list2.next = new ListNode(3)
list2.next.next = new ListNode(6)

console.log(addTwoNumbers(list1, list2))

// Python Program
// # class ListNode:
// #     def __init__(self, val=0, next=None):
// #         self.val = val
// #         self.next = next
// # def addTwoList(l1, l2):
// #     curr = dummy = ListNode(0)
// #     carry = 0
// #     while l1 or l2 or carry:
// #         if l1:
// #             carry += l1.val
// #             l1 = l1.next
// #         if l2:
// #             carry += l2.val
// #             l2 = l2.next
// #         curr.next = ListNode(carry % 10)
// #         curr = curr.next
// #         carry //= 10
// #     values=[]
// #     while dummy!=None:
// #         values.append(dummy.val)
// #         dummy=dummy.next
// #     return values[1:]

// # l1=ListNode(1)
// # l2=ListNode(2)
// # l3=ListNode(4)
// # l1.next=l2
// # l2.next=l3

// # l4=ListNode(1)
// # l5=ListNode(4)
// # l6=ListNode(6)
// # l4.next=l5
// # l5.next=l6
// # print(addTwoList(l1,l4))
