/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  const N = s.length;
  let count = 0;
  let matched = 0;
  let isContinue = true;
  let lastChar;

  for(let i = 0; i < N; i++) {
    lastChar = s[i];
    matched = 1;
    isContinue = true;
    for(let j = i + 1; j < N; j++) {
      if (s[j] === lastChar) {
        if (!isContinue) {
          break;
        }
        matched++;
      } else {
        isContinue = false;
        if (--matched === 0) {
          count++;
          break;
        }
      }
    }
  }

  return count;
};

module.exports.countBinarySubstrings = countBinarySubstrings;