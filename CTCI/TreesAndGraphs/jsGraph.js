// G - graph: contains a set of verticies V, and set of Edges E.

class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.AdjList = new Map();
    // keys hold the vertex, and the value holds the array of an adjacent node
  }

  addVertex(v) {
    // initialize the adjacent list with a null array
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    // get the lust for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    // get all the vertices
    let getKeys = this.AdjList.keys();

    // iterate over the vertices
    for (let i of getKeys) {
      // great the corresponding adjacency list
      // for the vertex
      let getValues = this.AdjList.get(i);
      let conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (let j of getValues) {
        conc += j + " ";

        // print the vertex and its adjacency lust
        console.log(i + " -> " + conc);
      }
    }
  }
}
