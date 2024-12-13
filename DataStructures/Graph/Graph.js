export default class Graph {
  constructor() {
    this.adjacencyMatrix = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyMatrix[vertex]) {
      this.adjacencyMatrix[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyMatrix[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyMatrix[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyMatrix[vertex1].add(vertex2);
    this.adjacencyMatrix[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyMatrix[vertex1].has(vertex2) &&
      this.adjacencyMatrix[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyMatrix[vertex1].delete(vertex2);
    this.adjacencyMatrix[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyMatrix[vertex]) return;
    for (let adjacentvertex of this.adjacencyMatrix[vertex]) {
      this.removeEdge(vertex, adjacentvertex);
    }

    delete this.adjacencyMatrix[vertex];
  }

  display() {
    for (let vertex in this.adjacencyMatrix) {
      console.log(vertex + " -> " + [...this.adjacencyMatrix[vertex]]);
    }
  }
}
