// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    pop_ex() {
        let auxiliar = {};
        this.length--;
        for (let i = 0; i < this.length; i++) {
            auxiliar[i] = this.data[i];
        }
        this.data = undefined;
        this.data = auxiliar;
        return this.data;
    }
    delete (index) {
        const item = this.data[index];
        this.shiftIndex(index);
        
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    unshift(item) {
        for (let i = this.length; i > 0 ; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
    shift() {
        const item = this.delete(0);
        return item;
    }
}

const myArray = new MyArray();

myArray.push("Julian");
myArray.push("David");
myArray.push("Diana");
myArray.push("Carolina");
myArray.push("Santiago");

console.log(myArray.data);

console.log(myArray.shift());

console.log(myArray.pop());

console.log(myArray.pop());

console.log(myArray.data);