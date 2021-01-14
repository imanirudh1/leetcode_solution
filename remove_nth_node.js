class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  add(value) {
    var node = new Node(value)
    if (!this.head) {
      this.head = node
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  removeNthNode(n) {
    var slow = this.head
    var fast = this.head
    for (let i = 0; i < n; i++) {
      fast = fast.next
    }
    if (!fast) {
      this.head = this.head.next
      this.size--
    } else {
      while (fast.next) {
        slow = slow.next
        fast = fast.next
      }
      slow.next = slow.next.next
      this.size--
    }
  }
  printList() {
    var current = this.head
    var list = ''
    while (current.next) {
      list += current.value + ' -> '
      current = current.next
    }
    list += current.value
    console.log(list)
  }
  size_List() {
    console.log(this.size)
  }
}

var list1 = new LinkedList()
list1.add(20)
list1.add(30)
list1.add(40)
// list1.removeNthNode(3)
list1.printList()
list1.size_List()
