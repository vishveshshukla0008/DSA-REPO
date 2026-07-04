class Queue {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  enqueue(val) {
    this.arr.push(val);
    this.size++;
  }

  dequeue() {
    if (this.arr.length == 0) {
      console.log("The queue is empty !");
      return;
    }
    this.arr.shift();
    this.size--;
  }

  printQueue() {
    if (this.arr.length == 0) {
      console.log("The Queue is empty !");
      return;
    }
    for (let el of this.arr) {
      process.stdout.write(`${el} -> `);
    }
    process.stdout.write(`null \n`);
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.printQueue();
console.log(q.size);
q.dequeue();
console.log(q.size);
q.printQueue();
