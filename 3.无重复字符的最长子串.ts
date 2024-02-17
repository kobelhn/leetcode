/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // 从第一个字符开始遍历，记录当前最长子串的长度
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    // 从当前字符开始，遍历到最后一个字符，记录当前子串的长度
    let currentLength = 0;
    let currentStr = "";
    for (let j = i; j < s.length; j++) {
      // 如果当前子串中已经包含当前字符，就停止遍历
      if (currentStr.includes(s[j])) {
        break;
      }
      currentStr += s[j];
      currentLength++;
    }
    // 如果当前子串的长度大于之前的最长子串的长度，就更新最长子串的长度
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}
// @lc code=end
