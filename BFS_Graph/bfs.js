/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. Vertex origin
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *  
 * INPUT: 
              C
            /   \
    A --- B       E  --- F --- D
            \   /   \   /
              H       G

    OUTPUT: 
    
 *  "ABCHEFGD"
 * 
 * ------
 * Used data structures:
 * 
 * Visited(Set):
 * {A, B, C}
 * 
 * Queue(array): 
 * [H]
 * 
 * Result(string):
 * "ABC"
 * 
 * enqueue: array.push() O(1)
 * 
 * dequeue: array.shift() O(n) //should be O(1) like a true queue
 */

function bfs(origin) {
    let queue = []
    let result = ""
    let visited = new Set()

    if(origin == null) {return ""}

    // Initiate queue and visited for while loop
    queue.push(origin)
    visited.add(origin)
    
    let curr

    // loop until queue empty
    while(queue.length > 0){
        // dequeue and add to result
        curr = queue.shift()
        result += curr.id

        // Iterate through all connected vertices
        for(let vertex of curr.edges){
            // if vertex has been visited, skip and don't add to queue (or you get duplicates)
            if(!visited.has(vertex)) {
                queue.push(vertex)
                visited.add(vertex)
            }        
        }  
    }
    
    return result
}