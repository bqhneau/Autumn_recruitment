// 1、纯手写，无正则
function formatNumber(num) {
    let numStr = num.toString();
    let result = '';
    let count = 0;

    // 处理整数部分
    for (let i = numStr.length - 1; i >= 0; i--) {
        result = numStr[i] + result;
        count++;
        // 每三位添加一个逗号
        if (count % 3 === 0 && i > 0) {
            result = ',' + result;
        }
    }

    // 处理小数部分
    const decimalIndex = numStr.indexOf('.');
    if (decimalIndex !== -1) {
        result += numStr.slice(decimalIndex); // 添加小数部分
    }

    return result;
}


// 2、正则
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// 3、现成的方法 toLocaleString
function formatNumber(num) {
    return num.toLocaleString();
}

// 示例
console.log(formatNumber(1234567.89)); // "1,234,567.89"



