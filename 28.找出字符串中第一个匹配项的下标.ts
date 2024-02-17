/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  function getNext(needle: string): number[] {
    let next = new Array(needle.length);
    next[0] = -1;
    let i = 0;
    let j = -1;
    while (i < needle.length - 1) {
      if (j === -1 || needle[i] === needle[j]) {
        i++;
        j++;
        next[i] = j;
      } else {
        j = next[j];
      }
    }
    return next;
  }

  if (needle === "") {
    return 0;
  }
  if (haystack === "") {
    return -1;
  }
  let i = 0;
  let j = 0;
  let next = getNext(needle);
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  if (j === needle.length) {
    return i - j;
  }
  return -1;
}
// @lc code=end
