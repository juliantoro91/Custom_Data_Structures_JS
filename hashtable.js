class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set (key, value) {
        const address = this.#getAddress(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }
    get (key) {
        const currentBucket = this.#getCurrentBucket(key);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] == key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete (key) {
        const currentBucket = this.#getCurrentBucket(key);
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const item = currentBucket[i];
                    //delete currentBucket[i];
                    currentBucket.splice(i,1);
                    return item;
                }
            }
        }
        return undefined;
    }
    getAllKeys() {
        const keys = [];
        let key;
        let bucket;
        for(let i = 0; i < this.data.length; i++) {
            bucket = this.data[i];
            if (bucket) {
                for(let j = 0; j < bucket.length; j++) {
                    key = bucket[j];
                    if (key) {
                        keys.push(key[0])
                    }
                }
            }
        }
        return keys;
    }
    #getAddress (key) {
        return this.hashMethod(key);
    }
    #getCurrentBucket (key) {
        const address = this.#getAddress(key);
        const currentBucket = this.data[address];
        return currentBucket;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set("Sandro", 1967);

console.log(myHashTable.data);

myHashTable.set("Mariana", 1997);
myHashTable.set("Diego", 2000);

console.log(myHashTable.data);

console.log(myHashTable.get("Sandro"));
console.log(myHashTable.get("Mariana"));
console.log(myHashTable.get("Diego"));
console.log(myHashTable.get("Julian"));

console.log(myHashTable.delete("Diego"));
console.log(myHashTable.data);

console.log(myHashTable.getAllKeys());