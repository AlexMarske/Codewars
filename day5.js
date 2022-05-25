// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  str = str.substring(str.length - ending.length)
  return str === ending
}