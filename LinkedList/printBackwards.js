/*
 * Complete the 'printBackward' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST node as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function printBackward(node) {
    function recurse(curr){
        if(curr == null){
         return;
        }
    
        recurse(curr.next)
        console.log(curr.data)
  }
  
  recurse(node)
}