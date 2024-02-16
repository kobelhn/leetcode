/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
    const map: { [key: string]: number } = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        // 如果当前数字比下一个数字小，则减去当前数字
        if (map[s[i]] < map[s[i + 1]]) {
            result -= map[s[i]];
        } else {
            // 否则加上当前数字
            result += map[s[i]];
        }
    }

    return result;
};
// @lc code=end

