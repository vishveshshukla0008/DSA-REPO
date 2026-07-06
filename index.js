class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.peak = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.peak == null) {
      this.peak = newNode;
      return true;
    }

    newNode.next = this.peak;
    this.peak = newNode;
  }

  pop() {
    if (this.peak == null) {
      console.log("Stack is empty !");
      return;
    }
    const popElement = this.peak.val;
    this.peak = this.peak.next;
    return popElement;
  }

  printList() {
    let temp = this.peak;
    if (!temp) {
      console.log("No elements in Stack !");
      return;
    }
    while (temp) {
      process.stdout.write(`${temp.val} -> `);
      temp = temp.next;
    }
    process.stdout.write("null\n");
  }

  getPeak() {
    if (this.peak == null) {
      console.log("Stack is empty !");
      return;
    }
    console.log(this.peak.val);
  }
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.printList();
s.getPeak();
s.pop();
// s.pop();
// s.pop();
// s.pop();
// s.pop();
// s.pop();
s.printList();
s.getPeak();
