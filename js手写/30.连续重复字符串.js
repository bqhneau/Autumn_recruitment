function hasConsecutiveDuplicates(str) {
    for (let i = 0; i < str.length - 1; i++) {
        // 只检查 a-z 或 A-Z 的字母
        if ((/[a-zA-Z]/).test(str[i]) && str[i] === str[i + 1]) {
            return true;
        }
    }
    return false;
}

// 测试
const inputStr = 'rattler123';
console.log(hasConsecutiveDuplicates('1133'));  // 输出: false
