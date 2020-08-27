/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const L1 = num1.length
  const L2 = num2.length
  const L = Math.max(L1, L2)
  let i = 0; let pilot = 0; const final = []
  while (i < L) {
    const n1 = (i < L1) ? Number(num1[L1 - i - 1]) : 0
    const n2 = (i < L2) ? Number(num2[L2 - i - 1]) : 0
    const sum = n1 + n2 + pilot
    final.unshift(sum % 10)
    pilot = sum < 10 ? 0 : 1
    i++
  }
  if (pilot) {
    final.unshift(pilot)
  }
  return final.join('')
}

module.exports.addStrings = addStrings
