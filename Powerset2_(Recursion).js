/*
https://leetcode.com/problems/subsets/

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

*/

/*
  @param {number[]} nums
  @return {number[][]}
 
 
 power set: 3 = 2^3 = total num of combinations in set
 
depth = 0 
 
d = 0                                  []
                            /                       \
d = 1                    []                         [1]                
                    /           \               /           \
d = 2             []            [2]            [1]          [1,2]
                /    \        /     \         /    \        /    \
d = 3          []    [3]     [2]  [2,3]     [1]    [1,3]   [1,2]  [1,2,3]
 
 
 result : [[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]]
 
 
 
- create result array


- recursion method:
    - Base Case: if depth === nums.length
        - push current array to nums array
        - return
        
    - Recurive calls:
        -  recurse(depth+1, arr) (left)
        -  recurse(depth+1, arr.push(depth)) (right)

- call recursion helper method with depth at 0 and emtpy array


- return result array

 
*/

var subsets = function(nums) {
    let result = [];
    
    // helper function
    function recurse(depth, arr) {
        if(depth === nums.length){
            result.push(arr);
            return;
        }
        
        recurse(depth+1,arr); // keep same array
        
        // let newArr = arr.slice(); // create copy of old array
        // newArr.push(nums[depth]); // add new element to array
        
        // recurse(depth+1,newArr); // pass newArr with added element to recursion

        recurse(depth+1,[...arr, nums[depth]]); // pass a new array with copy of old array plus the new element
    }
    
    recurse(0, []);
    
    return result;
};