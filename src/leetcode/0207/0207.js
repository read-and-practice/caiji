/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const g = new Gragh(numCourses)
  for (const edge of prerequisites) {
    g.addEdge(edge[1], edge[0])
  }

  const cycle = new DirectedCycle(g)
  if (cycle.hasCycle()) {
    return false
  }

  const order = new DepthFirstOrder(g)
  return order.reversePost.length === g.V
}

class DepthFirstOrder {
  constructor (g) {
    this.g = g
    this.pre = []
    this.post = []
    this.reversePost = []
    this.marked = []

    for (let v = 0; v < g.V; v++) {
      if (!this.marked[v]) this.dfs(g, v)
    }
  }

  dfs (g, v) {
    this.pre.push(v)
    this.marked[v] = true

    for (const w of g.adj(v)) {
      if (!this.marked[w]) { this.dfs(g, w) }
    }

    this.post.push(v)
    this.reversePost.unshift(v)
  }
}

class DirectedCycle {
  constructor (g) {
    this.g = g
    this.onStack = []
    this.marked = []
    this.cycle = false
    this.edgeTo = []

    for (let v = 0; v < g.V; v++) {
      if (!this.marked[v]) this.dfs(this.g, v)
    }
  }

  dfs (g, v) {
    this.onStack[v] = true
    this.marked[v] = true
    for (const w of g.adj(v)) {
      if (this.hasCycle()) {
        return
      } else if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(g, w)
      } else if (this.onStack[w]) {
        this.cycle = true
      }
    }
    this.onStack[v] = false
  }

  hasCycle () {
    return this.cycle
  }
}

class Gragh {
  constructor (V) {
    this.V = V
    this.edges = Array.from({ length: V }, () => [])
  }

  // 一条 v->w 的边
  addEdge (v, w) {
    this.edges[v].push(w)
  }

  // 邻接表
  adj (v) {
    return this.edges[v]
  }
}

module.exports.canFinish = canFinish
