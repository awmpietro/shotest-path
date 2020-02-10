/**
    Following the example for calculatinig all possible paths from a given graph, 
    let's now calcculate the shortest path bwtween 2 nodes
 */

function Graph() {
    let neighbors = this.neighbors = {};
    this.addEdge = function (u, v) {
        if (neighbors[u] === undefined) {  
            neighbors[u] = [];
        }
        neighbors[u].push(v);
        if (neighbors[v] === undefined) {  
            neighbors[v] = [];               
        }                                  
        neighbors[v].push(u);              
    };
    return this;
}


function shortestPath (graph, source, target) {
    if (source === target) {   
        console.log(source);          
        return;                 
    }                         
    let queue = [ source ],
    visited = { source: true },
    predecessor = {},
    tail = 0;
    while (tail < queue.length) {
        let u = queue[tail++], 
        neighbors = graph.neighbors[u];
        for (let i = 0; i < neighbors.length; ++i) {
            let v = neighbors[i];
            if (visited[v]) {
                continue;
            }
            visited[v] = true;
            if (v === target) {   
                let path = [ v ];   
                while (u !== source) {
                    path.push(u);
                    u = predecessor[u];
                }
                path.push(u);
                path.reverse();
                return path.join(" -> ");
            }
            predecessor[v] = u;
            queue.push(v);
        }
    }
    console.log('there is no path from ' + source + ' to ' + target);
}

// Add to the graph class all connections between nodes in a graph
function calculate (source, dest) {
  let graph = new Graph();
  graph.addEdge('0', '1');
  graph.addEdge('0', '2');
  graph.addEdge('0', '3');
  graph.addEdge('1', '3');
  graph.addEdge('1', '4');
  graph.addEdge('1', '5');
  graph.addEdge('2', '5');
  graph.addEdge('3', '6');
  graph.addEdge('4', '6');
  graph.addEdge('5', '6');
  graph.addEdge('6', '7');
  return shortestPath(graph, source, dest);  
};

console.log(calculate("0", "7"));