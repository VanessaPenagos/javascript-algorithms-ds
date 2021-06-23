class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySingleLinkedList {
    constructor(value) {
        this.head = {
            value = value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        this.node.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
    getIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        
        return currentNode;
    }
    insert(value, index) {
       if(index >= this.length) {
            return this.append(value);
       }
       const newNode = new Node(value);
       const firstPointer = this.getIndex(index-1);
       const holdingPointer = firstPointer.next;
       firstPointer.next = newNode;
       newNode.next = holdingPointer;
       this.length++; 

       return this;
    }
}

let mySingleLinkedList = new MySingleLinkedList(1);