const { palindromePairs, isPalindrome } = require('./0336.js')
const assert = require('assert').strict

describe('0336', () => {
  it('0', () => {
    assert.equal(isPalindrome(''), false, '')
    assert.equal(isPalindrome('ab'), false, 'ab')
    assert.equal(isPalindrome('abc'), false, 'abc')
    assert.equal(isPalindrome('abb'), false, 'abb')
    assert.equal(isPalindrome('bbc'), false, 'bbc')
    assert.equal(isPalindrome('abbc'), false, 'abbc')

    assert.equal(isPalindrome('abba'), true, 'abba')
    assert.equal(isPalindrome('aba'), true, 'aba')
    assert.equal(isPalindrome('a'), true, 'a')
    assert.equal(isPalindrome('abcba'), true, 'abcba')
    assert.equal(isPalindrome('aabbbaa'), true, 'aabbaa')
  })

  it('1', () => {
    assert.deepStrictEqual(
      palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']),
      [[0, 1], [1, 0], [2, 4], [3, 2]]
    )
  })

  it('2', () => {
    assert.deepStrictEqual(
      palindromePairs(['bat', 'tab', 'cat']),
      [[0, 1], [1, 0]]
    )
  })
})
