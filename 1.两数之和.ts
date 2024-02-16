/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    // 解法一
    // const result: number[] = [];

    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     const otherNum = target - num;
    //     if (nums.includes(otherNum)) {
    //         const otherNumIndex = nums.indexOf(otherNum);
    //         if (otherNumIndex !== i) {
    //             result.push(i, otherNumIndex);
    //             break;
    //         }
    //     }
    // }

    // return result;
    // 解法二
    const map = new Map<number, number>();
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const otherNum = target - num;
        if (map.has(otherNum)) {
            result = [map.get(otherNum) ?? -1, i];
            break
        }
        map.set(num, i);
    }

    if (result.some(item => item === -1)) {
        throw new Error('No two sum solution');
    }

    return result;
};
// @lc code=end

