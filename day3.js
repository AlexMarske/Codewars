// Find the last number between 1 and n (inclusive) that survives the elimination process

// Start with the first number on the left then remove every other number moving right until you reach the the end, then from the numbers remaining start with the first number on the right and remove every other number moving left, repeat the process alternating between left and right until only one number remains which you return as the "last man standing"

function lastManStanding(n) {
  let arr = []
  for (let i = 2; i <= n; i += 2) {
    arr.push(i)
  }
  while (arr.length > 1) {
    arr.reverse()
    arr = arr.filter((el, i) => i % 2 !== 0);
  }
  return Number(arr)
}