class Node {
  constructor(data) {
    this.data = data;
    this.next_node = null;
    this.previous_node = null;
  }
}

class DoublyLinkedList {
  constructor(first_node = null, last_node = null) {
    this.first_node = first_node;
    this.last_node = last_node;
  }

  insertAtEnd(value) {
    const new_node = new Node(value);

    if (!this.first_node) {
      this.first_node = new_node;
      this.last_node = new_node;
    } else {
      new_node.previous_node = this.last_node;
      this.last_node.next_node = new_node;
      this.last_node = new_node;
    }
  }

  removeFromFront() {
    const removed_node = this.first_node;
    this.first_node = this.first_node.next_node;
    return removed_node;
  }
}

class Queue {
  constructor() {
    this.data = new DoublyLinkedList();
  }

  enqueue(element) {
    this.data.insertAtEnd(element);
  }

  dequeue() {
    const removed_node = this.data.removeFromFront();
    return removed_node.data;
  }

  read() {
    return this.data.first_node ? this.data.first_node.data : null;
  }
}
