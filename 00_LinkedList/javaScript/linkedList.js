console.clear();

class Node {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  /**
   * @param {any} nodeData
   * @returns {Node}
   */
  set setNode(nodeData) {
    const node = new Node(nodeData);

    if (this.#head === null) {
      this.#head = node;
    } else {
      this.#tail.next = node;
    }

    this.#tail = node;
  }

  get getHead() {
    return this.#head;
  }

  get getTail() {
    return this.#tail;
  }

  /**
   * @param {Array<any>} data
   * @returns {this}
   */
  insertNodes(...data) {
    data = typeof data[0] === "object" ? data.flat() : data;

    return data.reduce((list, value) => {
      this.setNode = value;
      return list;
    }, this);
  }

  shiftNode() {
    const nextNode = this.#head.next;

    if (nextNode) {
      this.#head = nextNode;
    } else {
      this.#head = nextNode;
      this.#tail = nextNode;
    }
  }

  clear() {
    this.#head = null;
    this.#tail = null;
  }

  /**
   * @returns {this} in String format
   */
  toString() {
    return JSON.stringify({
      head: this.getHead,
      tail: this.getTail
    }, null, 2);
  }
}

const list = new SinglyLinkedList();
list.insertNodes(0)
list.insertNodes(1, 2, 3, 4, 5, 6);

console.log(list.toString());

list.clear()
console.log(list.toString());