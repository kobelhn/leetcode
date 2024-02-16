/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    const length = nums.length;
    if (length <= 1) {
        return length;
    }

    let i = 0;
    let j = 1;
    while (j < length) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
        j++;
    }

    return i + 1;
};
// @lc code=end

