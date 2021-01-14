const arr = [0900, 0940, 0950, 1100, 1500, 1800]
const dep = [0910, 1200, 1120, 1130, 1900, 2000]

function platform_needed(arr, dep, n) {
  arr.sort((a, b) => a - b)
  dep.sort((a, b) => a - b)
  var plat_need = 1
  var res = 1
  var i = 1
  var j = 0
  while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
      plat_need++
      i++
    } else if (arr[i] >= dep[j]) {
      plat_need--
      j++
    }
    if (plat_need > res) {
      res = plat_need
    }
  }
  return res
}
console.log(platform_needed(arr, dep, 6))
