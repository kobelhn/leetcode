/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 增加ts-ignore是因为使用的vscode的leetcode插件，声明ListCode会报错
function addTwoNumbers(
  // @ts-ignore
  l1: ListNode | null,
  // @ts-ignore
  l2: ListNode | null
  // @ts-ignore
): ListNode | null {
  // @ts-ignore
  let result: ListNode | null = null;
  // @ts-ignore
  let currentNode: ListNode | null = null;
  let carry = 0;

  while (l1 || l2) {
    const l1Val = l1?.val ?? 0;
    const l2Val = l2?.val ?? 0;
    const sum = l1Val + l2Val + carry;
    carry = Math.floor(sum / 10);
    // @ts-ignore
    const node = new ListNode(sum % 10);

    if (result === null) {
      result = node;
      currentNode = node;
    } else {
      currentNode!.next = node;
      currentNode = node;
    }

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  if (carry > 0) {
    // @ts-ignore
    currentNode!.next = new ListNode(carry);
  }

  return result;
}
// @lc code=end
