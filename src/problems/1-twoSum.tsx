/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//      for(var i = 0; i < nums.length; i++){
//         let n = nums[i];
//         let d = target - n
        
//         if(nums.includes(d)){
//             return [i,nums.indexOf(d)]
//         }
//     }
// };

var twoSum = (nums, target) => {
     for(var i = 0; i < nums.length; i++){
        let n = nums[i];
        let d = target - n
        
        if(nums.includes(d)){
            if(nums.indexOf(d)===i){
                continue;
            }
            return [i,nums.indexOf(d)]
        }
    }
};