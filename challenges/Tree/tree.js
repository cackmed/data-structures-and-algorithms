

export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }
  inorder(node) 
  { 
    if(node !== null) 
    { 
      this.inorder(node.left); 
      console.log(node.data); 
      this.inorder(node.right); 
    } 
  } 
  preorder(node) 
  { 
    if(node != null) 
    { 
      console.log(node.data); 
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
      console.log(node.data); 
    } 
  } 
  
}




