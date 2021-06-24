class Node {
    constructor() {
        this.value = value;
        this.next =null;
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
    push(value){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;            
        }
        this.length++;
        return this;
    }
    pop() {
        const topNode = this.top;
        if(this.length === 0) {
            return undefined;
        }
        if(this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else { 
            this.top = topNode.next; 
        }
        this.length--;
        return topNode;
    }
}