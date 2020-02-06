

export class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    const node = new Node(value);

    let currentNode = this.root;
    const t = true;
    while(t) {

      if(currentNode.value <= value) {
        if(currentNode.left) {
          currentNode = currentNode.left;
          continue;
        } else {
          currentNode.left = node;
          break;
        }
      } else {
        if(currentNode.right) {
          currentNode = currentNode.right;
          continue;
        } else {
          currentNode.right = node;
          break;
        }
      }
    }
  }
  contains(value) {
    if(!this.root) return false;

    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.value === value) {
        return true;
      } else if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  inorder(node) 
  { 
    if(node !== null) 
    { 
      this.inorder(node.left); 
      console.log(node.value); 
      this.inorder(node.right); 
    } 
  } 
  preorder(node) 
  { 
    if(node != null) 
    { 
      console.log(node.value); 
      this.preorder(node.left); 
      this.preorder(node.right); 
    } 
  } 
  postorder(node) 
  { 
    if(node != null) 
    { 
      this.postorder(node.left); 
      this.postorder(node.right); 
      console.log(node.value); 
    } 
  } 
  
}




