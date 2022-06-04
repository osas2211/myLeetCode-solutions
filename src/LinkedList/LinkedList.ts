interface LinkedListStructure{
    length: number
    head: NodeStructure
    tail: NodeStructure
}

interface NodeStructure{
    data: any
    next: null | NodeStructure
}

class ElementNode implements NodeStructure{
    data: any;
    next: any;
    constructor(value:any){
        this.data = value
        this.next = null
    }
}

class LinkedList implements LinkedListStructure{
    length: number;
    head: NodeStructure;
    tail: NodeStructure;
    constructor(value: any){
        this.head = new ElementNode(value)
        this.tail = this.head;
        this.length = 1
    }

    append(value: any): LinkedListStructure{
        const newNode = new ElementNode(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value: any): LinkedListStructure{
        const newNode = new ElementNode(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    toList(): any[]{
        const array: any[] = []
        let currentNode: NodeStructure = this.head;
        while(currentNode.next !== null){
            array.push(currentNode.data)
            currentNode = currentNode.next
        }
        array.push(currentNode.data)
        return array
    }

    private traverseLinkedList(index: number): NodeStructure{
        let currentNode: NodeStructure = this.head;
        let counter: number = 0
        while(counter !== index){
            currentNode  = currentNode.next as NodeStructure
            counter++
        }

        return currentNode
    }
    
    insert(index: number, value: any): LinkedListStructure{
        const newNode: NodeStructure = new ElementNode(value)
        if(index === 0){
            this.prepend(value)
        }
        else if (index > this.length-1){
            this.append(value)
        }
        else{
            let leader: NodeStructure = this.traverseLinkedList(index-1);
            newNode.next = leader.next
            leader.next = newNode
            this.length++
        }

        return this
    }

    remove(index: number): LinkedListStructure{
        const leader: NodeStructure = this.traverseLinkedList(index-1)
        const target = leader.next
        leader.next = target?.next as NodeStructure

        this.length--
        return this
    }
}

const ll = new LinkedList(54)
ll.append(48)
ll.append(20)
ll.append(80)
ll.remove(2)
console.log(ll.toList());
