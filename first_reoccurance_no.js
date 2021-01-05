const arr = [1, 2, 3, 4, 5]
function count_occurance(arr) {
  var reoccurance = {}

  for (let ele of arr) {
    if (reoccurance[ele]) {
      return ele
    } else {
      reoccurance[ele] = 1
    }
  }
  return undefined
}
console.log(count_occurance(arr))
