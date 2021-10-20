/*
1-- > 2-- > 3-- > 4-- > 5-- > null;

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class mySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this.length = 1;
    }
    // Append curso
    append (value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
    // Append propio - For Loop
    append_loop (value) {
        const node = new Node(value);

        let head = this.head;

        for (let i = 0; i < this.length; i++) {
            if (!head.next) {
                head.next = node;
                this.length++;
                this.tail = node;
                return node;
            }
            head = head.next;
        }
        return undefined;
    }
    // Append aportes clase - Recursividad
    checkNode(node){
        if(!node.next){
            return node;
        }
        return this.checkNode(node.next);
    }

    append_recursive(val){
        const newNode = new Node(val);
        const lastNode = this.checkNode(this.head);
        lastNode.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.head;
    }
    // Prepend curso
    prepend (value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
    // Insert propio
    insert_custom (value, position) {
        const newNode = new Node(value);
        let prevNode;
        let node = this.head;
        let nextNode;

        for (let i = 1; i < position; i++) {
            if (i == position - 1) {
                prevNode = node;
                nextNode = node.next;
            }
            node = node.next;
        }

        prevNode.next = newNode;
        newNode.next = nextNode;

        this.length++;

        return this;
    }
    insert_custom2 (value, position) {

        if (position == 1) {
            return this.prepend(value);
        } else if (position == this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        
        const nodes = this.getNodesByPosition(position);

        let prevNode = nodes.prevNode;
        let currentNode = nodes.currentNode;

        prevNode.next = newNode;
        newNode.next = currentNode;

        this.length++;

        return this;
    }
    // Insert curso
    insert (index, value) {
        if (index >= this.length) {
            return tihs.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }
    getTheIndex (index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
    // Remove propio
    getNodesByPosition (position) {
        let counter = 1;
        let prevNode;
        let currentNode = this.head;

        while (counter < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            counter++;
        }

        return {
            prevNode : prevNode,
            currentNode : currentNode
        };
    }
    initDetach () {
        const detachedNode = this.head;
        this.head = detachedNode.next;

        this.length--;

        return this;
    }
    endDetach () {
        const nodes = this.getNodesByPosition(this.length);

        let prevNode = nodes.prevNode;

        prevNode.next = null;
        this.tail = prevNode;

        this.length--;

        return this;
    }
    removePosition (position = this.length) {
        if (position == 1) {
            return this.initDetach();
        } else if (position >= this.length) {
            return this.endDetach();
        }
        
        const nodes = this.getNodesByPosition(position);
        let prevNode = nodes.prevNode;
        let currentNode = nodes.currentNode;
        
        prevNode.next = currentNode.next;

        this.length--;

        return this;
    }
    removeValue (value = null) {
        if (value) {
            let prevNode;
            let nextNode = this.head;

            for (let i = 1; i <= this.length; i++) {
                if (nextNode.value === value) {
                    if (i == 1) {
                        return this.initDetach();
                    } else if (i >= this.length) {
                        return this.endDetach();
                    }
                    prevNode.next = nextNode.next;
                    this.length--;

                    return this;
                }
                prevNode = nextNode;
                nextNode = nextNode.next;
            }
        }
        return this;
    }
}

let myLinkedList = new mySinglyLinkedList(1);

// TEST
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(5);
myLinkedList.insert_custom2(6,4);
myLinkedList.append(7);
myLinkedList.append(8);
myLinkedList.append(9);

myLinkedList.removePosition(1);
myLinkedList.removePosition(8);
myLinkedList.removePosition(3);
myLinkedList.removeValue(3);
myLinkedList.removeValue(8);
myLinkedList.removeValue(1);

console.log(myLinkedList.head);