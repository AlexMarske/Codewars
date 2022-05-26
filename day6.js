// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
  let arr = []
  for (let i = start; i !== end + 1; i++) {
    if (!(String(i).includes('5'))) {
      arr.push(i)
    }
  }
  return arr.length
}