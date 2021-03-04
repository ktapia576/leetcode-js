/*
   Question: 
    Given a string S, return the powerset P(S), which is an array of all combinations of S
 
    INPUT/OUTPUT:
    The function is expected to return a STRING_ARRAY.
    The function accepts STRING word as parameter.

    NOTE: When you have accumulated the powerset (array of strings), return the output array sorted.

    The input string will not contain duplicate characters

    The string combinations in the output array must be in the same order as the characters in the 
    intial input string. This means that for an input of 'ab', the output can be ['', 'a', 'ab', 'b']
    but not ['', 'a', 'b', 'ba']

    Example 1: 

    input: "abc"
    output: [ '', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' ]

    Example 2:

    input: ""
    output: ['']

*/

/*
start with depth = 0
(use depth with charAt() to build str)

                                DIAGRAM:

 depth = 0                       ""
                          /               \
 depth = 1             ""                   "a"
                       /\                 /     \
 depth = 2           ""  b              "a"       "ab"
                  /\     /\             /\          /\
 depth = 3      ""  c   b  bc          a  ac       ab abc

output: ["",'c','b' ,'bc', 'a','ac', 'ab', 'abc']

*/

let str = "abc";

function powerset(word) {
    let result = [];
    
    // helper function
    function recurse(depth, str) {
        if(depth === word.length) {
            // NOTE: This recursion travels all the way to the end of left branch first
            result.push(str); // push str into end of result array
            return;
        }
        
        recurse(depth+1, str); // keep same str
        recurse(depth+1, str += word.charAt(depth)); // add letter to str
    }
    
    recurse(0, ""); // start at depth 0 and start with empty string
    
    return result;
}

console.log(powerset(str));