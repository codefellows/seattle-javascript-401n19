'use strict';
const util = require('util');

// *********** INSTRUCTIONS ************* //
/*
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph

add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph

get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)

get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection

size
  - Arguments: none
  - Returns the total number of nodes in the graph


*/


// Vertex = Node
class Vertex {
  constructor(value) {
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    //this.startNode;
    //this.endNode;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // why use a Map?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    // - Arguments: value
    // - Returns: The added node
    let vertex = new Vertex(value)
    // console.log('Adding new Vertex with value: ', value);
    // - Add a node to the graph
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // console.log(`Creating new edge with ${startVertex} and ${endVertex}`, util.inspect(startVertex))
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Vertices');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  addBidirectionalEdge(startVertex, endVertex, weight) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Vertices');
    }

    const startAdjacencies = this.adjacencyList.get(startVertex);
    const endAdjacencies = this.adjacencyList.get(endVertex);
    startAdjacencies.push(new Edge(endVertex, weight));
    endAdjacencies.push(new Edge(startVertex, weight));
  }

  getNeighbors(vertex) {
    // - Arguments: node
    // - Returns a collection of edges connected to the given node
    // - Include the weight of the connection in the returned collection
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }

  getVertices() {
    // - Arguments: none
    // - Returns all of the nodes in the graph as a collection (set, list, or similar)
    return this.adjacencyList.entries();
  }

  has(vertex) {
    return this.adjacencyList.has(vertex);
  }

  size() {
    // - Arguments: none
    // - Returns the total number of nodes in the graph
    return this.adjacencyList.size();
  }

  /*
  ALGORITHM BreadthFirst(vertex)
  DECLARE nodes <-- new List()
  DECLARE breadth <-- new Queue()
  DECLARE visited <-- new Set()

  breadth.Enqueue(vertex)
  visited.Add(vertex)

  while (breadth is not empty)
      DECLARE front <-- breadth.Dequeue()
      nodes.Add(front)

      for each child in front.Children
          if(child is not visited)
              visited.Add(child)
              breadth.Enqueue(child)   

  return nodes;
  */

  bfs(startNode) {

    const queue = [];
    // method to keep track of visited nodes
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {

      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {

        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    // console.log(visitedNodes);

    return;
  }

  /*
    Push the starting node onto the stack
    Start a while loop while the stack is not empty
    Peek at the top node in the stack
    If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
    If the top node does not have any unvisited children, Pop that node off the stack
    repeat until the stack is empty.
  */

  dfs(startNode) {

    const stack = [];
    const visitedNodes = new Set();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while (stack.length) {

      const currentNode = stack.pop();
      // console.log('CurrentNode', currentNode);
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        // console.log('Neighbor', neighborNode);

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
      }
    }
    // console.log('Visited Nodes', visitedNodes);

    return visitedNodes
  }

}

const graph = new Graph();

const Pandora = graph.addVertex('Pandora');
const Arendelle = graph.addVertex('Arendelle');
const Metroville = graph.addVertex('Metroville');
const Monstropolis = graph.addVertex('Monstropolis');
const Narnia = graph.addVertex("Narnia");
const Naboo = graph.addVertex('Naboo');


graph.addBidirectionalEdge(Pandora, Metroville, 82);
graph.addBidirectionalEdge(Pandora, Arendelle, 150);
graph.addBidirectionalEdge(Arendelle, Metroville, 99);
graph.addBidirectionalEdge(Arendelle, Monstropolis, 42);
graph.addBidirectionalEdge(Monstropolis, Naboo, 73);
graph.addBidirectionalEdge(Monstropolis, Metroville, 105);
graph.addBidirectionalEdge(Naboo, Metroville, 26);
graph.addBidirectionalEdge(Naboo, Narnia, 250);
graph.addBidirectionalEdge(Narnia, Metroville, 37);


// getNeighbors()
let neighborCheck = graph.getNeighbors(Pandora);
// console.log('getNeighbors(ten) ', neighborCheck);


// getVertices() -> returns and iterable object
let vertices = graph.getVertices();
// console.log('All Graph Vertices', vertices);

// Breadth First Search
let bfs = graph.bfs(Pandora);
// console.log('BFS', bfs)

// Depth First Search
let dfs = graph.dfs(Pandora);
console.log('DFS', dfs);
module.exports = Graph;