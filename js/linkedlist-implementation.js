
class Node {
  constructor(data) {
    this.data = data;
    this.next_node = null;
  }
}

// a linkedlist only has immediate access to its first node
class LinkedList {
  constructor(first_node) {
    this.first_node = first_node;
  }
}


// Creating instances of Node class
const node_1 = new Node("once");
const node_2 = new Node("upon");
const node_3 = new Node("a");
const node_4 = new Node("time");

// Linking the nodes together
node_1.next_node = node_2;
node_2.next_node = node_3;
node_3.next_node = node_4;

// testing that it works
const linkedList = new LinkedList(node_1); 

// Traverse the linked list and print the data of each node to ensure the nodes are linked correctly.

function traverseLinkedList(linkedList) {
  let currentNode = linkedList.first_node;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next_node;
  }
}

traverseLinkedList(linkedList);
// Output:
// once
// upon
// a
// time




