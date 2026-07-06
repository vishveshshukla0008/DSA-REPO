class Stack {
  constructor() {
    this.peak = null;
    this.arr = [];
  }

  push(val) {
    this.arr.push(val);
    this.peak = this.arr.length - 1;
  }

  pop() {
    if (this.arr.length === 0) {
      console.log("Stack is empty !");
      return;
    }
    const popElement = this.arr.pop();
    this.peak = this.arr.length - 1;
    return popElement;
  }

  getPeak() {
    if (this.arr[this.peak] == undefined) {
      console.log("Stack is empty !");
      return null;
    }

    return this.arr[this.peak];
  }

  print() {
    let i = this.peak;
    while (i >= 0) {
      process.stdout.write(`${this.arr[i]} -> `);
      i--;
    }
    console.log();
  }
}

function reverseStack(stack) {
  let s = new Stack();
  let i = stack.peak;
  while (stack.peak >= 0) {
    s.push(stack.pop());
  }

  return s;
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);

s.print();
//
// s.pop();
// s.pop();
// s.pop();
// s.pop();
// s.print();

const s2 = reverseStack(s);
s2.print();

console.log(s2.getPeak());
