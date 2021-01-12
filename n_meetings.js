const starting = [1, 0, 3, 8, 5, 8]
const finish = [2, 6, 4, 9, 7, 9]
for (let j = 0; j < starting.length; j++) {
  minIndex = j
  for (let k = j + 1; k < starting.length; k++) {
    if (finish[minIndex] > finish[k]) {
      minIndex = k
    }
  }
  ;[starting[j], starting[minIndex]] = [starting[minIndex], starting[j]]
  ;[finish[j], finish[minIndex]] = [finish[minIndex], finish[j]]
}

var start = starting[0]
var end = finish[0]
const attended = []
for (let i = 0; i < starting.length; i++) {
  if (attended.length === 0) {
    attended.push(i + 1)
    var start = starting[i]
    var end = finish[i]
  } else {
    start = starting[i]
    if (start > end) {
      attended.push(i + 1)
      end = finish[i]
    }
  }
}
console.log(starting)
console.log(finish)
console.log(attended)
