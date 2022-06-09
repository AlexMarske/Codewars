// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = function (word) {
  let sol = []
  const reg = /[A-Z]/
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(reg)) {
      sol.push(i)
    }
  }
  return sol
};