// initialize the node to create the data, and links -- firstnode and previousnode
class Node {
    constructor(data){
        this.data = data
        this.next_node = null
        this.previous_node = null
    }
}

// initialze your doublylinkedlist to assign the firstnode and the lastnode
// a doubly linkedlist has access to its first node and last node
class DoublyLinkedList {
    constructor(first_node = null, last_node = null){
        this.first_node = first_node
        this.last_node = last_node
    }
}

// Creating nodes
const node_1 = new Node("Node 1");
const node_2 = new Node("Node 2");
const node_3 = new Node("Node 3");

// Linking the nodes together to form a doubly linked list
node_1.next_node = node_2;
node_2.previous_node = node_1;
node_2.next_node = node_3;
node_3.previous_node = node_2;

// Creating an instance of the DoublyLinkedList class
const doublyLinkedList = new DoublyLinkedList(node_1, node_3);

// Implement a function to traverse the doubly linked list in both forward and backward directions and print the data of each node.
function traverseForward(doublyLinkedList) {
  let currentNode = doublyLinkedList.first_node;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next_node;
  }
}

function traverseBackward(doublyLinkedList) {
  let currentNode = doublyLinkedList.last_node;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.previous_node;
  }
}

// Example usage:
traverseForward(doublyLinkedList);
// Output:
// Node 1
// Node 2
// Node 3

traverseBackward(doublyLinkedList);
// Output:
// Node 3
// Node 2
// Node 1


