const { integerBreak } = require('./0343.js')
const assert = require('assert').strict

describe('0343', () => {
  it('1', () => {
    assert.equal(integerBreak(2), 1)
    assert.equal(integerBreak(3), 2)
    assert.equal(integerBreak(4), 4)
    assert.equal(integerBreak(5), 6)
    assert.equal(integerBreak(6), 9)
    assert.equal(integerBreak(7), 12)
    assert.equal(integerBreak(8), 18)
    assert.equal(integerBreak(9), 27)
    assert.equal(integerBreak(10), 36)
    assert.equal(integerBreak(11), 54)
    assert.equal(integerBreak(12), 81)
    assert.equal(integerBreak(13), 108)
    assert.equal(integerBreak(14), 162)
  })
})
