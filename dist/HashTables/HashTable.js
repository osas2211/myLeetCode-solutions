"use strict";
class HashTable {
    constructor(size) {
        this.size = size;
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    insert(key, value) {
        const address = this._hash(key);
        const bucket = this.data[address];
        // check if key is already in bucket and overight it's value
        for (let i = 0; i < (bucket === null || bucket === void 0 ? void 0 : bucket.length); i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return this.data;
            }
            else {
                break;
            }
        }
        this.data[address] ? this.data[address].push([key, value])
            : this.data[address] = [[key, value]];
        return this.data;
    }
    search(key) {
        const address = this._hash(key);
        const bucket = this.data[address];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return undefined;
    }
    delete(key) {
        const address = this._hash(key);
        const bucket = this.data[address];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                delete this.data[address][i];
            }
        }
        return this.data;
    }
    keys() {
        const buckets = this.data.filter(entry => entry !== undefined);
        const keys = [];
        buckets.forEach(bucket => bucket.forEach(pair => keys.push(pair[0])));
        return keys;
    }
}
