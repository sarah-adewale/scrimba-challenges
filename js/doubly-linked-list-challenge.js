// Add a method to the DoublyLinkedList class that prints all the elements of the list in reverse order.

// initialize node
class Node {
    constructor(data){
        this.data = data
        this.previous_node = null
        this.next_node = null
    }
}

class DoublyLinkedList {
    constructor(first_node = nill, last_node = nill){
        this.first_node = first_node
        this.last_node = last_node
    }
}


// create instances
const node_1 = new Node('1')
const node_2 = new Node('2')
const node_3 = new Node('3')
const node_4 = new Node('4')
const node_5 = new Node('5')


const doublyLinkedList = new DoublyLinkedList(node_1, node_5)
// link them together
node_1.next_node = node_2
node_2.previous_node = node_1
node_2.next_node = node_3
node_3.previous_node = node_2
node_3.next_node = node_4
node_4.previous_node = node_3
node_4.next_node = node_5
node_5.previous_node = node_4

function traverseBackward(doublyLinkedList){
    let currentNode = doublyLinkedList.last_node

    while(currentNode){
        console.log(currentNode.data)
        currentNode = currentNode.previous_node
    }
}


function traverseForward(doublyLinkedList){
    let currentNode = doublyLinkedList.first_node

    while(currentNode){
        console.log(currentNode.data)
        currentNode = currentNode.next_node
    }
}

traverseForward(doublyLinkedList)
traverseBackward(doublyLinkedList)