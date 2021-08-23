/*
Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a 
route between two nodes.
*/
let V;
let adj;

const Graph = (v) => {
  V = v;
  adj = new Array(v);
  for (let i = 0; i < v; ++i) {
    adj[i] = [];
  }
};

const addEdge = (v, w) => {
  adj[v].push(w);
};

const routeBetweenNodes = () => {};

Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);

console.log(adj);
