const starting = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924]
const finish = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252]
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
