/*
 * Complete the 'quicksort' function below.
 *
 * Quicksort algo must be preformed in place without using extra space
 * 
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 * 
 *            P
 * L          R
 * [3,2,1,5,7,8]
 *      i 
 *    w
 * 
 * w = wall (everything before the wall index is for the left array chunk)
 * 
 * i = is the current index for comapring to pivot
 * 
 */

function quicksort(arr) {
    function subsort(left, right){
        // Base Cases
        if(left >= right){ // the subarray is one element or smaller so return
            return
        }
        
        let pivot = arr[right]
        let wall = left
        
        for(let i = left; i < right; i++){
            if(arr[i] < pivot){
                //swap
                let temp = arr[i]
                arr[i] = arr[wall]
                arr[wall] = temp
                
                wall++
            }
        }
        
        //swap pivot and wall
        arr[right] = arr[wall]
        arr[wall] = pivot
        
        subsort(left,wall-1)
        subsort(wall+1,right)
    }
    
    subsort(0, arr.length-1)
    
    return arr
}