/*
 * Complete the 'reverseLinkedList' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
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
 * Input:
 * (1) --> (5) --> (7) --> (10)
 * 
 * Output:
 * (10) --> (7) --> (5) --> (1)
 * 
 * - create gobal previous var
 * 
 * - loop through all nodes
 *    - current node.next equals previous node
 *    - store current node into previous var
 *    - set current node to current.next
 */

function reverseLinkedList(node) {
    let prev = null
    let curr = node
    
    while(curr != null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}