type buckets = [[string, any]][]

interface HashTableProps{
    size: number
    data: buckets // data bucket
}

class HashTable implements HashTableProps{
    size: number;
    data: buckets

    constructor(size: number){
        this.size = size
        this.data = new Array(size)
    }

    private _hash(key: string):number {
        let hash: number = 0
        for (let i: number = 0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length
        }
        return hash
    }

    insert(key: string, value: any): buckets{
        const address = this._hash(key);
        const bucket = this.data[address]
        // check if key is already in bucket and overight it's value
        for(let i: number= 0; i<bucket?.length; i++){
            if(bucket[i][0] === key){
                bucket[i][1] = value
                return this.data
            }
            else{
                break
            }
        }

        this.data[address] ? this.data[address].push([key, value]) 
            : this.data[address] = [[key, value]]
        return this.data
    }

    search(key: string): any{
        const address = this._hash(key)
        const bucket =  this.data[address]
        for(let i = 0; i<bucket.length; i++){
            if (bucket[i][0] === key){
                return bucket[i][1]
            }
        }
        
        return undefined
    }

    delete(key: string):buckets {
        const address = this._hash(key)
        const bucket = this.data[address]
        for(let i:number = 0; i<bucket.length; i++){
            if(bucket[i][0] === key){
                delete this.data[address][i]
            }
        }
        return this.data
    }

    keys(): string[]{
        const buckets = this.data.filter(entry => entry !== undefined)
        const keys: string[] = []
        buckets.forEach(bucket => bucket.forEach(pair=> keys.push(pair[0])))
        return keys
    }
} 
