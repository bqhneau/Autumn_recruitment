/*
    使用 indexOf 方法检查当前前缀是否为当前字符串的开头。
    如果不是，则逐步缩短前缀（去掉最后一个字符），直到找到一个匹配的前缀。
*/ 


function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // 字符串逐渐减少的过程
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
}

// 示例
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 输出："fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // 输出："" 
