class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.length = 0;
    }
    insert(value) {
        const newNode = new Node(value);
        let levels = 1;

        if (this.length === 0) {
            this.root = newNode;
            this.length++;
        } else {
            let parent = this.root;

            while (true) {
                if (value != parent.value) {
                    if (value > parent.value) {
                        if (!parent.right) {
                            parent.right = newNode;
                            if (levels >= this.length) { this.length++; };
                            break;
                        } else {
                            parent = parent.right;
                            levels++;
                        }
                    } else {
                        if (!parent.left) {
                            parent.left = newNode;
                            if (levels >= this.length) { this.length++; };
                            break;
                        } else {
                            parent = parent.left;
                            levels++;
                        }
                    }
                } else {
                    break;
                }
            }
        }

        return this;
    }
    search(value) {
        let currentNode = this.root;

        return this.#search_recursive(currentNode, value);
    }
    #search_recursive(currentNode, value) {
        if (value != currentNode.value) {
            if (value > currentNode.value) {
                if (currentNode.right) {
                    return this.#search_recursive(currentNode.right, value);
                }
            } else {
                if (currentNode.left) {
                    return this.#search_recursive(currentNode.left, value);
                }
            }
        } else {
            return currentNode;
        }
    }
}

let myTree = new Tree();

myTree.insert(10);
myTree.insert(20);
myTree.insert(170);
myTree.insert(17);
myTree.insert(4);
myTree.insert(2);
myTree.insert(8);

console.log(myTree.search(170));