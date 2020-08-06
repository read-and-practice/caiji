/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const result = [];
  for(let i = 0, len = words.length; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if (i === j) continue;
      if (isPalindrome(words[i] + words[j])) {
        result.push([i, j])
      }
    }
  }

  return result;
};

function isPalindrome(str) {
  if (!str) return false;
  const N = str.length;
  let i = 0, j = N - 1;
  while(i <= j) {
    if (str[i] !== str[j]) break;
    i++; j--;
  }

  return i > j;
}

var s = isPalindrome('aba')

module.exports.palindromePairs = palindromePairs;
module.exports.isPalindrome = isPalindrome;