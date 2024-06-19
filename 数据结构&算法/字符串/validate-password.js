/**
 * 密码验证合格程序
 * 描述
 * 密码要求:
 * 1.长度超过8位
 * 2.包括大小写字母.数字.其它符号,以上四种至少三种
 * 3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）
 * 
 * 
 * 输出描述：
 * 如果符合要求输出：OK，否则输出NG
 */
let pwdInput = ['021Abc9000','021Abc9Abc1','021ABC9000','021$bc9000'],
    res = [];
for (let pwd of pwdInput) {
    if (pwd.length <= 8) {
        res.push("NG");
    } else if (!checkType(pwd)) {
        res.push("NG");
    } else if (hasRepeat(pwd)) {
        res.push("NG");
    } else {
        res.push("OK");
    }
}
for (let item of res) {
    console.log(item);
}

function checkType(pwd) {
    let hasNum = false,
        hasDot = false,
        hasUpperLetter = false,
        hasLowerLetter = false,
        pwdArr = pwd.split("");
    for (let str of pwdArr) {
        if (!isNaN(Number(str))) {
            hasNum = true;
        } else if (!/[A-Z]/.test(str) && !/[a-z]/.test(str)) {
            hasDot = true;
        } else if (/[A-Z]/.test(str)) {
            hasUpperLetter = true;
        } else if (/[a-z]/.test(str)) {
            hasLowerLetter = true;
        }
    }
    return (
        [hasNum, hasDot, hasUpperLetter, hasLowerLetter].filter((item) => item)
            .length >= 3
    );
}

function hasRepeat(pwd) {
    let pwdArr = pwd.split("");
       
    for (let i = 0; i < pwdArr.length; i++) {
        let allSameIdx = findAllIdx(i, pwdArr);
        for (let idx of allSameIdx) {
            if (checkIsRepeat(i, idx, pwdArr)) return true;
        }
    }
    return false;
}

function checkIsRepeat(leftIdx, rightIdx, arr) {
    if (rightIdx && rightIdx !== leftIdx) {
        let count = 0;
        while (rightIdx < arr.length) {
            if (arr[leftIdx] === arr[rightIdx]) count++;
            else {
                break;
            }
            leftIdx++;
            rightIdx++;
        }
        if (count > 2) return true;
    }
    return false;
}

function findAllIdx(curIdx,arr){
    let res = [];
    for (let i = curIdx + 1; i < arr.length; i++) {
        if (arr[i] === arr[curIdx]) {
            res.push(i);
        }
    }
    return res;
}