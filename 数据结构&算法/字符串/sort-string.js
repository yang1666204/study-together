/**
 * 字符串排序
 * 
 * 描述
 * 编写一个程序，将输入字符串中的字符按如下规则排序。
 * 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
 * 如，输入： Type 输出： epTy
 * 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
 * 如，输入： BabA 输出： aABb
 * 规则 3 ：非英文字母的其它字符保持原来的位置。
 * 如，输入： By?e 输出： Be?y
 */

let inputStr = 'A Famous Saying: Much Ado About Nothing (2012/8).'

/**
 * 
 * @param {String} str 待排序字符串
 */
function sortString(str) {
    const res = Array.from(str);
    // 一个只包含大小写字母的已排好序的字符数组
    const letterSort = Array.from(str.replace(/[^a-z]/igm, '')).sort((pre, cur) => {
        let lowerPre = pre.toLowerCase(), lowerCur = cur.toLowerCase();
        return lowerPre < lowerCur ? -1 : lowerPre > lowerCur ? 1 : 0;
    })
    res.forEach((str, index) => {
        if (/[a-z]/i.test(str)) {
            res[index] = letterSort[0];
            letterSort.shift();
        }
    })
    return res.join('');
}

sortString(inputStr)