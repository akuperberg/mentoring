class TreeNode {
  value: number;
  rightNode: any;
  leftNode: any;
  constructor(value) {
    this.value = value;
    this.rightNode = null;
    this.leftNode = null;
  }
}

class Tree {
  rootNode: any;
  constructor() {
    this.rootNode = null;
  }
  insert(value: number) {
    const newNode = new TreeNode(value);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return this;
    }
    let current = this.rootNode;
    const insertingLoop = true;
    while (insertingLoop) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.leftNode) {
          current.leftNode = newNode;
          return this;
        }
        current = current.leftNode;
      } else {
        if (!current.rightNode) {
          current.rightNode = newNode;
          return this;
        }
        current = current.rightNode;
      }
    }
  }
}
