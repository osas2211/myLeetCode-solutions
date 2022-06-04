"use strict";
class ElementNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new ElementNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new ElementNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new ElementNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    toList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode.next !== null) {
            array.push(currentNode.data);
            currentNode = currentNode.next;
        }
        array.push(currentNode.data);
        return array;
    }
    traverseLinkedList(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value) {
        const newNode = new ElementNode(value);
        if (index === 0) {
            this.prepend(value);
        }
        else if (index > this.length - 1) {
            this.append(value);
        }
        else {
            let leader = this.traverseLinkedList(index - 1);
            newNode.next = leader.next;
            leader.next = newNode;
            this.length++;
        }
        return this;
    }
    remove(index) {
        const leader = this.traverseLinkedList(index - 1);
        const target = leader.next;
        leader.next = target === null || target === void 0 ? void 0 : target.next;
        this.length--;
        return this;
    }
}
const ll = new LinkedList(54);
ll.append(48);
ll.append(20);
ll.append(80);
ll.remove(2);
console.log(ll.toList());
