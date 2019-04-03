class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    removeVertex(vertex) {
        const index = this.vertices.indexOf(vertex);
        if (index) {
            this.vertices.splice(index, 1);
        }
        while (this.edges[vertex].length) {
            const adjacentVertex = this.edges[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
    }

    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;
    }

    removeEdge(vertex1, vertex2) {
        const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
        const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
        if (index1) {
            this.edges[vertex1].splice(index1, 1);
            this.numberOfEdges--;
        }
        if (index2) {
            this.edges[vertex2].splice(index2, 1);
        }
    }

    size() {
        return this.vertices.length;
    }

    relations() {
        return this.numberOfEdges;
    }

    traverseDFS(vertex, fn) {
        if (!this.vertices.indexOf(vertex)) {
            return console.log('Vertex not found');
        }
        const visited = [];
        this._traverseDFS(vertex, visited, fn);
    }

    _traverseDFS(vertex, visited, fn) {
        visited[vertex] = true;
        if (this.edges[vertex] !== undefined) {
            fn(vertex);
        }
        for (let i = 0; i < this.edges[vertex].length; i++) {
            if (!visited[this.edges[vertex][i]]) {
                this._traverseDFS(this.edges[vertex][i], visited, fn);
            }
        }
    }
    BFS  =  (vector, callback) => {
        if(!this.vertices.indexOf(vector)){
            console.log('err')
        }
       const queue = []
       const visited =  []
       visited[vector] = true
       queue.push(vector)
       while(queue.length){
           vector = queue.shift()
           callback(vector)
            for(let i = 0 ; i < this.edges[vector].length ; i ++ ){
                if(!visited[this.edges[vector][i]]){
                    visited[this.edges[vector][i]] = true
                    queue.push(this.edges[vector][i])
                }
            }
       }
    }
    traverseBFS(vertex, fn) {
        if (!this.vertices.indexOf(vertex)) {
            return console.log('Vertex not found');
        }
        const queue = [];
        queue.push(vertex);
        const visited = [];
        visited[vertex] = true;
        while (queue.length) {
            vertex = queue.shift();
            fn(vertex);
            for (let i = 0; i < this.edges[vertex].length; i++) {
                if (!visited[this.edges[vertex][i]]) {
                    visited[this.edges[vertex][i]] = true;
                    queue.push(this.edges[vertex][i]);
                }
            }
        }
    }

    pathFromTo(vertexSource, vertexDestination) {
        if (!this.vertices.indexOf(vertexSource)) {
            return console.log('Vertex not found');
        }
        const queue = [];
        queue.push(vertexSource);
        const visited = [];
        visited[vertexSource] = true;
        const paths = [];
        while (queue.length) {
            const vertex = queue.shift();
            for (let i = 0; i < this.edges[vertex].length; i++) {
                if (!visited[this.edges[vertex][i]]) {
                    visited[this.edges[vertex][i]] = true;
                    queue.push(this.edges[vertex][i]);
                    // save paths between vertices
                    paths[this.edges[vertex][i]] = vertex;
                }
            }
        }
        if (!visited[vertexDestination]) {
            return undefined;
        }

        const path = [];
        for (var j = vertexDestination; j != vertexSource; j = paths[j]) {
            path.push(j);
        }
        path.push(j);
        return path.reverse().join('-');
    }

    print() {
        console.log(this.vertices.map(function (vertex) {
            return (`${vertex} -> ${this.edges[vertex].join(', ')}`).trim();
        }, this).join(' | '));
    }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
// graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
graph.BFS(1, vertex => { console.log(vertex); });
class Graph2 {
vertex = []
edges = []
    addVertex(index){
        this.vertex.push(index)
        this.edges[index] = [] 
    }
    addEdge(vector1 , vector2){
        this.edges[vector1].push(vector2)
        this.edges[vector2].push(vector1)
    }
    
}