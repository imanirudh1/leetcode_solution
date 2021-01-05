const arr1 = [1, 2, 6, 10, 15]
const arr2 = [3, 5, 8]

function mergeSort(arr1, arr2) {
  const merge = []
  let arrayOne = arr1[0]
  let arrayTwo = arr2[0]
  let i = 1
  let j = 1
  while (arrayOne || arrayTwo) {
    if (!arrayTwo || arrayOne < arrayTwo) {
      merge.push(arrayOne)
      arrayOne = arr1[i]
      i++
    } else {
      merge.push(arrayTwo)
      arrayTwo = arr2[j]
      j++
    }
  }
  return merge
}
console.log(mergeSort(arr1, arr2))
