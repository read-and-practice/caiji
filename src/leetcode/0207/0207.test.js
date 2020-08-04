const { canFinish } = require('./0207.js')
const assert = require('assert').strict

describe('0207', () => {
  it('1', () => {
    assert.ok(canFinish(2, [[1,0]]))
    assert.ok(canFinish(4, [[1,0], [2,1], [3,2]]))
    assert.ok(canFinish(5, [[1,0], [2,1], [3,2], [4, 3]]))
  })

  it('2', () => {
    assert.ok(!canFinish(2, [[1, 0], [0, 1]]));
  })

  it('3', () => {
    assert.ok(canFinish(3, [[1, 0], [1, 2]]));
  })
})