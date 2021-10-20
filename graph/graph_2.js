class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        this.#checkAndAddEdge(this.adjacentList[node1],node2);
        this.#checkAndAddEdge(this.adjacentList[node2],node1);
        
        return this;
    }
    #checkAndAddEdge(list, node) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] == node) {
                return false;
            }
        }
        list.push(node);
        return true;
    }
}

let myGraph = new Graph();

myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");

myGraph.addEdge(1,6);
myGraph.addEdge(1,3);
myGraph.addEdge(1,4);
myGraph.addEdge(3,5);
myGraph.addEdge(3,6);
myGraph.addEdge(5,4);
myGraph.addEdge(4,8);