module.exports = (list1, list2) => {

  let mergedListHead = { value : -1, next : null }; 
  let current = mergedListHead;

  while(list1 && list2) {
    if(list1.value > list2.value) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    current = current.next;
  }

 
  current.next = list1 || list2;

  return mergedListHead.next;
};



