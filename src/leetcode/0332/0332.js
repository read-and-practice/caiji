/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const dests = {};
  tickets.forEach(item => {
    const [from, to] = item;
    if (!dests[from]) {
      dests[from] = [];
    }
    dests[from].push(to);
  });

  // 按字母排序一下
  for(let key in dests) {
    if (Object.prototype.hasOwnProperty.call(dests, key)) {
      dests[key].sort(sortByAlphabet);
    }
  }

  const arrived = [];
  dfs('JFK');

  return arrived;

  function dfs(nodeKey) {
    while(dests[nodeKey] && dests[nodeKey].length > 0) {
      const nextNodeKey = dests[nodeKey].shift();
      dfs(nextNodeKey);
    }

    arrived.unshift(nodeKey);
  }
};

function sortByAlphabet(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
}

module.exports.findItinerary = findItinerary;
