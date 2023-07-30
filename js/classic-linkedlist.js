// Add a method to the classic LinkedList class that prints all the elements of the list.

// create a linkedlist node
class Node {
    constructor(data){
        this.data = data
        this.next_node = null
    }
}

// create a class for the linkedlist first node
class LinkedList {
    constructor(first_node){
        this.first_node = first_node
    }
}

// create instances of the node
const node_1 = new Node('1')
const node_2 = new Node('2')
const node_3 = new Node('3')
const node_4 = new Node('4')

// connect the list
node_1.next_node = node_2
node_2.next_node = node_3
node_3.next_node = node_4

const linkedList = new LinkedList(node_1)

function classicLinkedList(linkedList){
    // initialize the current node
    let currentNode = linkedList.first_node

    while(currentNode){
        console.log(currentNode.data)
        currentNode = currentNode.next_node
    }

}

classicLinkedList(linkedList)