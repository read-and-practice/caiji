/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  const digitsMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const result = []
  const firstChars = digitsMap[digits[0]]
  for (let i = 0, len = firstChars.length; i < len; i++) {
    const firstStr = firstChars[i]
    backTrack(firstStr, digits[1], digits.slice(1))
  }

  function backTrack (str, nextDigit, remainedDigits) {
    if (!nextDigit) {
      result.push(str)
      return
    }

    const chars = digitsMap[nextDigit]
    for (let i = 0, len = chars.length; i < len; i++) {
      const newStr = str + chars[i]
      backTrack(newStr, remainedDigits[1], remainedDigits.slice(1))
    }
  }

  return result
}

module.exports.letterCombinations = letterCombinations
