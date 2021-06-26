class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if(root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
              currentNode = currentNode.left;
          }
        } else {
          if(value > currentNode.value) {
            if(!currentNode.rigth) {
              currentNode.rigth = newNode;
              return this;
            } else {
              currentNode = currentNode.rigth;
            }
          }
        }
      }
    }
  }
}