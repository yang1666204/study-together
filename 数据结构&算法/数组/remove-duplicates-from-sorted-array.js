/**
 * 题目描述：
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现 K 次 ，返回删除后数组的新长度。
 * 元素的 相对顺序 应该保持 一致 。
 * 
 * 相关题目：26. 删除有序数组中的重复项 80. 删除有序数组中的重复项 II
 * 
 * 示例 2：
 *
 * 输入：nums = [0,0,1,1,1,2,2,2,3] k = 2
 * 输出：5, nums = [0,0,1,1,2,2,3]
 */

/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 */
var removeDuplicates = function (nums, k) {
    /**
     * slow:当前可以插入的位置指针
     * fast:遍历slow之后的每一个元素的指针
     * 如果slow - k的位置不等于fast指向的元素，说明slow这个位置是可以插入的
     */
    let slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[slow - k] !== nums[fast]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};