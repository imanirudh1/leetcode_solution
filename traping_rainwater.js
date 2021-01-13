const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
function traping_rainwater(height) {
  var left = 0
  var right = height.length - 1
  var leftMax = 0
  var rightMax = 0
  var res = 0
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        res += leftMax - height[left]
      }
      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        res += rightMax - height[right]
      }
      right--
    }
  }
  return res
}
console.log(traping_rainwater(height))
