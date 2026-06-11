class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null; // pointer jo ki point karega starting ko
    this.size = 0;
  }

  insertAtStart(value) {
    let node = new Node(value);
    this.size++;
    if (this.head == null) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(value) {
    let node = new Node(value);
    this.size++;
    if (this.head == null) {
      this.head = node;
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = node;
  }

  deleteAtStart() {
    if (this.head == null) {
      console.log("Linked List has already empty ! can't delete !");
      return;
    }

    this.head = this.head.next;
    this.size--;
  }

  deleteAtLast() {
    if (this.head === null) {
      console.log("Linked list has already empty !");
    }

    let temp = this.head;

    while (temp.next.next !== null) {
      temp = temp.next;
    }

    temp.next = null;
    this.size--;
  }

  insertAtPosition(position, data) {
    // check the list is empty and inserting position!

    if (position < 1 || position > this.size + 1) {
      console.log("Position is not valid !");
      return;
    }

    if (position === 1) {
      this.insertAtStart(data);
      return;
    }

    if (position === this.size + 1) {
      this.insertAtEnd(data);
      return;
    }

    let count = 1;

    let temp = this.head;

    while (count < position - 1) {
      temp = temp.next;
      count++;
    }

    let opt = temp.next;

    let newNode = new Node(data);

    newNode.next = opt;
    temp.next = newNode;

    this.size++;
  }

  deleteAtPosition(index) {
    if (index < 0 || index >= this.size) return;

    if (index == 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let count = 1;

    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next; // traversing !
    }
    temp.next = temp.next.next;
  }

  printList() {
    // check karo ki kya list hai bi
    if (this.head === null) {
      console.log("Linked List is empty !");
      return;
    }

    let temp = this.head;
    while (temp !== null) {
      process.stdout.write(`${temp.data}->`);
      temp = temp.next;
    }
    process.stdout.write("null");
    console.log();
  }

  getIndexValue(index) {
    if (index < 0 || index >= this.size) return -1;
    if (index == 0) {
      console.log(this.head.data);
      return;
    }
    let temp = this.head;
    let count = 1;
    while (count < index) {
      temp = temp.next;
      count++;
    }

    console.log(temp.next);
  }

  findMid() {
    if (this.size == 0) {
      console.log("Empty Linked list !");
      return;
    }

    if (this.size == 1) {
      console.log(this.head.data);
      return;
    }

    // bruteforce approach !

    let mid = Math.floor(this.size / 2);

    let count = 1;
    let temp = this.head;

    while(count <= mid) {
      temp = temp.next;
      count++;
    }

    console.log(temp.data)
  }
}

const list = new LL();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(60);
list.insertAtEnd(70);
// list.insertAtEnd(60);

list.printList();
console.log(list.size);

list.findMid();
