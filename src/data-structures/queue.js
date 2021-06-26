class  Node {
    constructor(value) {
        this.value = value;
        this.next = value;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length++;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.length++;
        return this;
    }
    dequeue() {
        
    }
}
const myQueue = new Queue();
