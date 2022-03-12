'use strict';
const Graph = require('../utils/graph');
const util = require('util');

// function direct_flights(graph, origin, destination) {
//   let cost = 0;
//   if (!graph.has(origin) || !graph.has(destination)) {
//     throw new Error('__ERROR__ Invalid city', origin, destination);
//   }
//   const visited = new Set();
//   visited.add(origin);

//   function _walk(graph, start, end,) {
//     let neighbors = graph.getNeighbors(start)
//     console.log('Neighbors', neighbors);
//     neighbors.forEach((neighbor) => {
//       if (visited.has(neighbor)) return;
//       visited.add(neighbor);
//       // console.log('Neighbor', neighbor.vertex.value, neighbor.weight);
//       if (neighbor.vertex.value === end.value) {
//         cost += neighbor.weight;
//         return
//       } else {
//         console.log('NEIGBOR', neighbor.vertex)
//         _walk(graph, neighbor.vertex, end);
//       }
//     })

//   }

//   _walk(graph, origin, destination);

//   console.log('true', cost)
//   return cost;
// }

function directFlights(graph, ...cities) {
  console.log('CITIES', cities);
  let cost = 0;
  let current = cities[0];
  const queue = [];
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

  return visitedNodes;
}

/*
  - step 1: take in the graph, starting city, ending city
    - verify both cities are in the graph
  - step 2: 
  get neighbors of start/current node
  put neighbors in visited Set
  check to see if neighbors are end city
  if yes, add weight to cost and return
  i no, recursive call on neighbors
*/

/*
def direct_flights(graph, location_names):

    cost = 0

    for origin_name, destination_name in zip(
        location_names, location_names[1:]
    ):
        nodes = graph.get_nodes()

        origin_node = None

        for candidate_node in nodes:
            if candidate_node.value == origin_name:
                origin_node = candidate_node
                break

        if not origin_node:
            return False, 0

        edges = graph.get_neighbors(origin_node)

        destination_node = None

        for edge in edges:
            if edge.vertex.value == destination_name:
                cost += edge.weight
                destination_node = edge.vertex
                break

        if not destination_node:
            return False, 0

    return True, cost

*/

const graph = new Graph();

const Pandora = graph.addVertex('Pandora');
const Arendelle = graph.addVertex('Arendelle');
const Metroville = graph.addVertex('Metroville');
const Monstropolis = graph.addVertex('Monstropolis');
const Narnia = graph.addVertex("Narnia");
const Naboo = graph.addVertex('Naboo');


graph.addBidirectionalEdge(Pandora, Arendelle, 150);
graph.addBidirectionalEdge(Pandora, Metroville, 82);
graph.addBidirectionalEdge(Arendelle, Metroville, 99);
graph.addBidirectionalEdge(Arendelle, Monstropolis, 42);
graph.addBidirectionalEdge(Monstropolis, Naboo, 73);
graph.addBidirectionalEdge(Monstropolis, Metroville, 105);
graph.addBidirectionalEdge(Naboo, Metroville, 26);
graph.addBidirectionalEdge(Naboo, Narnia, 250);
graph.addBidirectionalEdge(Narnia, Metroville, 37);


// DIRECTFLIGHTS
directFlights(graph, Pandora, Naboo, 'Zork');

// getNeighbors()
let neighborCheck = graph.getNeighbors(Metroville);
// console.log('getNeighbors(Metroville) ', neighborCheck, graph.has(Metroville));

// getVertices() -> returns and iterable object
let vertices = graph.getVertices();
// console.log('All Graph Vertices', vertices);

// console.log('log the graph', util.inspect(graph))