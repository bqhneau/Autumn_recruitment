// 方法一：递归 + foreach
function recFlat(arr, depth = 1) {
    let result = [];
    arr.forEach((val) => {
        if (Array.isArray(val) && depth > 0) {
            // 递归展平，并减少深度
            result = result.concat(recFlat(val, depth - 1));
        } else {
            // 非数组直接推入结果数组
            result.push(val);
        }
    });
    return result;
}



// 方法二：用栈模拟递归
function stackFlat(arr, depth = 1) {
    const stack = [...arr]; // 复制输入数组
    console.log('stack',stack);
    const result = [];
    
    while (stack.length) {
        const next = stack.pop(); // 从栈中取出一个元素
        
        if (Array.isArray(next) && depth > 0) {
            // 将数组元素拆开并推入栈中
            stack.push(...next);
            depth--; // 减少深度
        } else {
            // 非数组元素推入结果数组
            result.push(next);
        }
    }
    
    return result.reverse(); // 因为我们使用栈（后进先出），所以需要反转结果
}




// 方法三：使用 reduce 和递归
function reduceFlat(arr, depth = 1) {
    // 用 reduce 和递归将数组展平
    return arr.reduce((acc, val) => 
        // 如果 val 是数组并且深度大于 1，则递归调用 flat
        Array.isArray(val) && depth > 1 
        ? acc.concat(reduceFlat(val, depth - 1)) 
        : acc.concat(val)
    , []);
}



// 示例用法：
const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = reduceFlat(nestedArray, Infinity);
console.log(flattenedArray); // 输出: [1, 2, 3, 4, 5]
