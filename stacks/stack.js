class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);

        if (newNode.value) {
            if (this.length === 0) {
                this.top = newNode;
                this.bottom = newNode;
            } else {
                const holdingPointer = this.top;
                
                this.top = newNode;
                this.top.next = holdingPointer;
            }
            this.length ++;

            return this;
        }
        
    }
    pop() {
        const holdingPointer = this.peek();;

        if (this.length > 1) {
            this.top = this.top.next;

            holdingPointer.next = null;
        } else {
            this.top = null;
            this.bottom = null;
        }

        if (this.length > 0) {
            this.length--;
        }

        return holdingPointer;
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);