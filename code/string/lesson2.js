/**
 * 计数二进制子串
 * ^异或算法 比较的二进制每一位数 相同是0 不同是1
 */
export default (str) => {
    // 建立数据结构，堆栈，保存数据
    let r = [];
    // 给定任意子输入都返回一个符合条件的子串
    let match = (str) => {
        let j = str.match(/^(0+|1+)/)[0];
        let o = (j[0] ^ 1).toString().repeat(j.length);
        let reg = new RegExp(`^(${j}${o})`);
        if (reg.test(str)) {
            return RegExp.$1;
        } else {
            return '';
        }
    };
    // 通过for循环控制程序运行的流程
    for (let i = 0; i < str.length - 1; i++) {
        let sub = match(str.slice(i));
        if (sub) {
            r.push(sub);
        }
    };
    return r;
}