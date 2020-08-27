const {findItinerary} = require('./0332.js')
const assert = require('assert').strict;

describe('0332', () => {
  it('basic', () => {
    assert.deepStrictEqual(
      findItinerary([
        ["MUC", "LHR"],
        ["JFK", "MUC"],
        ["SFO", "SJC"],
        ["LHR", "SFO"]
      ]),
      ["JFK", "MUC", "LHR", "SFO", "SJC"]
    )
  })

  it('basic 2', () => {
    assert.deepStrictEqual(
      findItinerary([
        ["JFK","SFO"],
        ["JFK","ATL"],
        ["SFO","ATL"],
        ["ATL","JFK"],
        ["ATL","SFO"]
      ]),
      ["JFK","ATL","JFK","SFO","ATL","SFO"]
    )
  })

  it('1', () => {
    assert.deepStrictEqual(
      findItinerary([
        ["JFK","A"],
        ["A","JFK"],
        ["JFK","B"],
      ]),
      ["JFK","A","JFK","B"]
    )
  })
})