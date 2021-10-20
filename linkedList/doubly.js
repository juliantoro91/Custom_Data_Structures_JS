class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class myDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;

        this.length = 1;
    }
    // Append curso
    append (value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }
}

let myLinkedList = new myDoublyLinkedList(1);

// TEST
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);