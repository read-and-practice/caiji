const { addStrings } = require('./0415.js')
const assert = require('assert').strict

describe('0415', () => {
  it('1', () => {
    assert.equal(addStrings('1', '2'), '3')
    assert.equal(addStrings('10', '2'), '12')
    assert.equal(addStrings('10', '20'), '30')
    assert.equal(addStrings('10', '200'), '210')
  })

  it('2', () => {
    assert.equal(addStrings('1', '9'), '10')
    assert.equal(addStrings('999', '2'), '1001')
    assert.equal(addStrings('999', '999'), '1998')
  })

  it('3', () => {
    assert.equal(addStrings('0', '9'), '9')
    assert.equal(addStrings('999', '0'), '999')
    assert.equal(addStrings('0', '0'), '0')
  })
})
