function getCount(str) {
  return str.split('').filter(e => e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u').length
}