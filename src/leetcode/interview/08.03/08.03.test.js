const assert = require('assert').strict
const { findMagicIndex } = require('./08.03.js')

describe('08.03', () => {
  it('1', () => {
    assert.equal(findMagicIndex([1, 1, 1]), 1)
    assert.equal(findMagicIndex([0, 2, 3, 4, 5]), 0)
    assert.equal(findMagicIndex([1, 2, 3, 4]), -1)
  })
})
