class Deque {
  constructor(size) {
    this.arr = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = this.arr.length;
  }
  enqueue(val) {
    if (this.rear == -1 && this.front == -1) {
      this.front = 0;
      this.rear = 0;
      this.arr[this.rear] = val;
      return;
    }

    if ((this.rear + 1) % this.size === this.front) {
      console.log("The Deque is full !");
      return;
    }

    this.arr[(this.rear + 1) % this.size] = val;
    this.rear = (this.rear + 1) % this.size;
    return;
  }

  dequeue() {
    if (this.front == -1) {
      console.log("The queue is empty !!");
      return;
    }
    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;
      return;
    }

    this.front = (this.front + 1) % this.size;
    return;
  }
print() {
  if (this.front === -1) {
    console.log("The queue is empty!");
    return;
  }

  let i = this.front;

  while (true) {
    process.stdout.write(this.arr[i] + " ");

    if (i === this.rear) break;

    i = (i + 1) % this.size;
  }

  console.log();
}
}

const d = new Deque(5);
d.enqueue(1);
d.enqueue(2);
d.enqueue(3);
d.enqueue(4);
d.enqueue(5);

d.print();
d.dequeue();
d.enqueue(100);
d.print();
