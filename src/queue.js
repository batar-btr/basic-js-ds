const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

const last = list => {
  let node = list;
  while (node.next) {
    node = node.next;
  }
  return node;
};

class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if(this.list) {
      last(this.list).next = new ListNode(value);
    } else {
      this.list = new ListNode(value);
    }
  }

  dequeue() {
    let elem = this.list?.value;
    this.list = this.list?.next;
    return elem;
  }
}

module.exports = {
  Queue
};
