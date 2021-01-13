nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]

function threeSum(nums) {
  const result = []
  nums.sort((a, b) => a - b)
  console.log(nums)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i == 0 || nums[i] !== nums[i - 1]) {
      var low = i + 1
      var high = nums.length - 1
      var sum = 0 - nums[i]
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          result.push([nums[i], nums[low], nums[high]])
          while (low < high && nums[low] === nums[low + 1]) low++
          while (low < high && nums[high] === nums[high - 1]) high--
          low++
          high--
        } else if (nums[low] + nums[high] < sum) low++
        else high--
      }
    }
  }
  return result
}

console.log(threeSum(nums))
