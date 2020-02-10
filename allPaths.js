// First extract the adjacency lines from the adjacency matrix from a given graph. This will give you something like

/*
Example: Adjacency Matrix:
[ [0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0] ]
*/
/*
    Adjency lines from 0 to 8, starting from 0, where a path can't repeat a node
*/

const adj = [ [1,2,3],[2,4,5],[5],[6],[6],[6],[7],[]];

let counter = [{visited:{0:true},path:[0]}] 

function path(adj){
    const paths = []
    while(counter.length){
        obj = counter.pop()
        node = obj.path[obj.path.length-1]
        visited = obj.visited
        if(node >= adj.length || adj[node].length == 0){
            paths.push(obj.path)
        }else{
            for(let i=0;i<adj[node].length;i++){
                if(!visited[adj[node][i]]){
                    visited[adj[node][i]] = true
                    arr = obj.path.slice(0);
                arr.push(adj[node][i]); counter.push({visited:JSON.parse(JSON.stringify(visited)),path:arr})
                }
            }
        }
    }
    return paths;
}

console.log(path(adj))

/** 
Output all possible paths:

[ [ 0, 3, 6, 7 ],
  [ 0, 2, 5, 6, 7 ],
  [ 0, 1, 5, 6, 7 ],
  [ 0, 1, 4, 6, 7 ],
  [ 0, 1, 2, 5, 6, 7 ] ]
*/