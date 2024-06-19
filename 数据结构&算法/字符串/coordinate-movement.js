/**
 * 坐标移动
 * 
 * 描述
 * 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。
 * 输入：
 * 合法坐标为A(或者D或者W或者S) + 数字（两位以内）
 * 坐标之间以;分隔。
 * 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。
 * 下面是一个简单的例子 如：
 * A10;S20;W10;D30;X;A1A;B10A11;;A10;
 * 处理过程：
 * 起点（0,0）
 * +   A10   =  （-10,0）
 * +   S20   =  (-10,-20)
 * +   W10  =  (-10,-10)
 * +   D30  =  (20,-10)
 * +   x    =  无效
 * +   A1A   =  无效
 * +   B10A11   =  无效
 * +  一个空 不影响
 * +   A10  =  (10,-10)
 * 结果 （10， -10）
 */
let inputArr,
    inputStr = "A10;S20;W10;D30;X;A1A;B10A11;;A10;";
inputArr = inputStr.split(";").filter((item) => checkIsAvailabel(item));
let res = [0, 0];
res.lastIndexOf
for (let item of inputArr) {
    let [pre, cur] = getValue(item);
    if (pre === "A") {
        res[0] -= cur;
    }
    if (pre === "D") {
        res[0] += cur;
    }
    if (pre === "W") {
        res[1] += cur;
    }
    if (pre === "S") {
        res[1] -= cur;
    }
}
console.log(res);

function checkIsAvailabel(str) {
    let temp = str.split("");
    if (temp.length === 2) {
        if (
            (temp[0] === "A" ||
                temp[0] === "D" ||
                temp[0] === "W" ||
                temp[0] === "S") &&
            typeof Number(temp[1]) === "number"
        ) {
            return true;
        }
    }
    if (temp.length === 3) {
        if (
            temp[0] === "A" ||
            temp[0] === "D" ||
            temp[0] === "W" ||
            temp[0] === "S"
        ) {
            if (
                !isNaN(Number(temp[1])) && Number(temp[1]) !== 0 && // 判断一个字符类型的数字用isNaN
                !isNaN(Number(temp[2]))
            ) {
                return true;
            }
        }
    }
    return false;
}

function getValue(value) {
    let temp = value.split("");
    if (temp.length === 2)
        return [temp[0], Number(temp[1])];
    if (temp.length === 3) {
        return [temp[0], Number(temp[1] + temp[2])];
    }
}
