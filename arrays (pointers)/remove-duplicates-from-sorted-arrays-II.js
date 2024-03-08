/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let r = 1;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[j - 1] && r < 2) {
          nums[i++] = nums[j];
          r++;
      }
      else if (nums[j] != nums[j - 1]) {
          nums[i++] = nums[j]
          r = 1;
      }
  }
  return i
};

//Uses a two pointer method, one pointer to track current valid position, and one to iterate through array. 
//Basically updates in space valid elements. 