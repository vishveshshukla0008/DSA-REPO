class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  size = 0;
  constructor() {
    this.head = null;
  }

  dequeue() {
    if (!this.head) {
      console.log("The entire queue is empty !");
      return;
    }
    this.size--;
    this.head = this.head.next;
  }
  enqueue(val) {
    let newNode = new Node(val);
    this.size++;
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  printQueue() {
    if (!this.head) {
      console.log("The entire queue is empty !");
      return;
    }
    process.stdout.write("\n");
    let temp = this.head;
    while (temp) {
      process.stdout.write(`${temp.data} -> `);
      temp = temp.next;
    }
    process.stdout.write("null");
    process.stdout.write("\n");
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.printQueue();

q.dequeue();
q.printQueue();
console.log(q.size)
