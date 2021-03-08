/*
 * Complete the 'mergeArrays' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 * 
 * 
 * a = [2,5,5]
 * b = [1,2,3]
 * 
 * [1,2,2,3]
 * 
 * input: 
 * no negatives
 * 
 * -create result array
 * 
 * -iterate until an array empty (if array empty)
 *   - array a will have ptr i
 *   - array b will have ptr j
 *      if a element < b element insert a element, increment a pointer
 *      if a element = b element insert b element, increment b pointer
 *      else insert b element, increment b pointer
 * 
 * -push all elements to end of result array
 * 
 * -return result array
 * 
 */

function mergeArrays(a, b) {
    let result = []
    let i = 0, j =0;

    while(i !== a.length && j !== b.length){
        if(a[i] < b[j]){
            result.push(a[i])
            i++
        } else if(a[i] === b[j]) {
            result.push(b[j])
            j++
        } else {
            result.push(b[j])
            j++
        }
    }
    
    if(i === a.length){
        let newArray = b.slice(j)//remove previous elemebts from b
        result = [...result, ...newArray]
    } else {
        let newArray = a.slice(i)
        result = [...result, ...newArray]
    }
    
    return result
}