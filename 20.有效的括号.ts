/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < s.length; i++) {
        // 如果是左括号，则入栈
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            // 如果是右括号，判断是否与栈顶元素匹配，不匹配则返回false
            if (s[i] !== map[stack.pop() as string]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
// @lc code=end

