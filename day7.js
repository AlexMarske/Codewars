// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

function vowelIndices(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  let sol = []
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      sol.push(i + 1)
    }
  }
  return sol
}