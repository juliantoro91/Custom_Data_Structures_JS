class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);

        if (newNode.value) {
            if (this.length === 0) {
                this.first = newNode;
                this.last = newNode;
            } else {
                const holdingPointer = this.last;
                
                this.last = newNode;
                holdingPointer.next = this.last;
            }
            this.length ++;

            return this;
        }
        
    }
    dequeue() {
        const holdingPointer = this.peek();;

        if (this.length > 1) {
            this.first = this.first.next;

            holdingPointer.next = null;
        } else {
            this.first = null;
            this.last = null;
        }

        if (this.length > 0) {
            this.length--;
        }

        return holdingPointer;
    }
}

let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);