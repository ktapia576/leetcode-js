/*
 * Complete the 'robotPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 * 
 * 
 *  [[ 0, 0, 0, 0],
 *   [ 0, 0, 0, 0],
  *  [ 0, 0, 0, 0]]
 * 
 * Traversal methods:
 * up: array[row-1][col]
 * down: array[row+1][col]
 * left: array[row][col-1]
 * right: array[row][col+1]
 * 
 * DFS Solution Approach
 *                            0,0
 *          down/        right|    up|    \ left
 *            1,0          0,1    -1,0   0,-1
 *      /    |   |   \
 * 
 * 
 * - create count paths var
 * 
 * -traverse function (go left up down right)
 *     - base case1: if out of bounds : return
 *     - base case2: if element has been visited: return
 *     - base case3: if reached destination : count++ return
 *      
 *      - make current element visited (change 0 to 1)
 * 
 *      -recursive cases: traverse(Up)
 *                        traverse(Down)
 *                        traverse(Left)
 *                        traverse(Right)
 * 
 *      - after traversing all 4 options (go back but change element back to 0) (Backtrack)
 * 
 * -invoke helper function
 * 
 * - return total count
 */

function robotPaths(matrix) {
    let count = 0
    let maxRow = matrix.length - 1
    let maxCol = matrix[0].length - 1 
    
    function traverse(row, col){
        // base cases
        if(row < 0 || row > maxRow || col < 0 || col > maxCol) { return }
        if(matrix[row][col] === 1) { return }
        if(row === maxRow && col === maxCol) {
            count++
            return
        }
        
        // mark as visited
        matrix[row][col] = 1
        
        //traverse
        traverse(row+1,col)
        traverse(row,col+1)
        traverse(row-1,col)
        traverse(row,col-1)
        
        // unmark visited since all 4 options completed
        matrix[row][col] = 0
    }
    
    traverse(0, 0)
    
    return count
}