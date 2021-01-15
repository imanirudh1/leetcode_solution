function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
function palindrome_check(head) {
  var slow = head
  var fast = head

  //find middle of linked list
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  //reverse the right half
  slow.next = reverseList(slow.next)
  //move slow pointer the right side
  slow = slow.next
  //check if left half and right half are equal or not
  while (slow != null) {
    if (slow.val != head.val) {
      return false
    }
    slow = slow.next
    head = head.next
  }
  return true
}

function reverseList(head) {
  var prev = null
  var next = null
  while (head != null) {
    next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

var list1 = new ListNode(1)
var b = new ListNode(2)
list1.next = b
var c = new ListNode(2)
b.next = c
c.next = new ListNode(2)
console.log(palindrome_check(list1))
