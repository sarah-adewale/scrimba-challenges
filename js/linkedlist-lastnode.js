// initialize Node class

class Node {
    constructor(data){
        this.data = data
        this.next_node = null
    }
}

class LinkedList{
    constructor(first_node){
        this.first_node = first_node
    }
}

// create instances
const node_1 = new Node('1')
const node_2 = new Node('2')
const node_3 = new Node('3')

// create links
node_1.next_node = node_2
node_2.next_node = node_3

const linkedList = new LinkedList(node_1)

function addNodeToEnd(linkedList, data) {
  const newNode = new Node(data);
  let currentNode = linkedList.first_node;
  while (currentNode.next_node) {
    currentNode = currentNode.next_node;
  }
  currentNode.next_node = newNode;
}

function linkedListLastNode(linkedList){
    let currentNode = linkedList.first_node

    while(currentNode.next_node){
        console.log(currentNode.data)
        currentNode = currentNode.next_node
        // return currentNode.data
    }

    
}

// def last
// current_node = first_node
// while current_node.next_node current_node = current_node.next_node
// end
// return current_node.data end

addNodeToEnd(linkedList);

linkedListLastNode(linkedList)