/**
 * 283. 移动零
 * 
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 
 * 双指针解法，维护一个慢指针k始终处于第一个0的位置 能得到 [0,k)都是非0元素，[k,i]都是0
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== k) {
                [nums[i], nums[k]] = [nums[k], nums[i]]
                k++;
            } else {
                k++;
            }
        }
    }
};