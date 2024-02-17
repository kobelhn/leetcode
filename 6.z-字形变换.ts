/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  let result: string = "";
  let arr: string[][] = [];
  let index: number = 0;
  let flag: boolean = false;
  for (let i = 0; i < s.length; i++) {
    if (!arr[index]) {
      arr[index] = [];
    }
    arr[index].push(s[i]);
    if (index === 0 || index === numRows - 1) {
      flag = !flag;
    }
    index += flag ? 1 : -1;
  }
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].join("");
  }
  return result;
}
// @lc code=end
