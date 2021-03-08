/*
 * Complete the 'dnaComplement' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * 
 * s = GTCAG
 * 
 * reverse -> GACTG
 * replace -> CTGAC
 * 
 * return CTGAC
 * 
 * - create result string var
 * 
 * - make string into char array
 * 
 * - reverse string
 * 
 * - loop through each char
 *      - if char == A 
 *          make it T
 *      - if char == T 
 *          make it A
 *      - if char == C 
 *          make it G
 *      - if char == G
 *          make it C
 * 
 * - join char array into single string
 * 
 * -return result
 */

function dnaComplement(s) {
    let result = s.split("") //make into char array
    
    result.reverse()
    
    for(let i in result){
        if(result[i] === "A"){
            result[i] = "T"
        } else if(result[i] === "T"){
            result[i] = "A"
        } else if(result[i] === "C"){
            result[i] = "G"
        } else if(result[i] === "G"){
            result[i] = "C"
        }
    }
    
    return result.join('')
}