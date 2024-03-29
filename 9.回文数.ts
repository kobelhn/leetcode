/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;
  // 从两端向中间遍历，判断是否相等，不相等则返回false
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// @lc code=end
