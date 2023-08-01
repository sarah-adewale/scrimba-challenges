
class Node {
  constructor(data) {
    this.data = data;
    this.next_node = null;
  }
}

class LinkedList {
  constructor(first_node) {
    this.first_node = first_node;
  }
}

// Creating nodes
const node_1 = new Node("once");
const node_2 = new Node("upon");
const node_3 = new Node("a");
const node_4 = new Node("time");

// Linking the nodes together
node_1.next_node = node_2;
node_2.next_node = node_3;
node_3.next_node = node_4;

// Creating an instance of the LinkedList class
const linkedList = new LinkedList(node_1);


// Implement a function to search for a specific value in the linked list and return the corresponding node.

function searchValue(linkedList, value) {
  let currentNode = linkedList.first_node;
  while (currentNode) {
    if (currentNode.data === value) {
      return currentNode;
    }
    currentNode = currentNode.next_node;
  }
  return null; // Value not found
}

console.log(searchValue(linkedList, "a")); // Output: Node with data "a"
console.log(searchValue(linkedList, "hello")); // Output: null (Value not found)

