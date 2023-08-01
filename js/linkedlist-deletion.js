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


function traverseLinkedList(linkedList) {
  let currentNode = linkedList.first_node;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next_node;
  }
}

// traverseLinkedList(linkedList);
// Output:
// once
// upon
// a
// time



function deleteNode(linkedList, value) {
  let currentNode = linkedList.first_node;
  let prevNode = null;

  while (currentNode) {
    if (currentNode.data === value) {
      if (prevNode) {
        prevNode.next_node = currentNode.next_node;
      } else {
        // If the node to be deleted is the first node
        linkedList.first_node = currentNode.next_node;
      }
      break;
    }
    prevNode = currentNode;
    currentNode = currentNode.next_node;
  }
  traverseLinkedList(linkedList);
}

deleteNode(linkedList, "a");

// Output:
// once
// upon
// time
// world
