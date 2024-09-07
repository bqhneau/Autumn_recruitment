/*
    1、接受参数为函数
    2、返回接受指定个数参数的函数
*/ 

function curry(func) {
    // 获取函数的参数长度
    const arity = func.length;

    // 内部的递归柯里化函数
    return function curried(...args) {
        // 如果传入的参数数量小于原函数所需参数数量
        if (args.length < arity) {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
        // 参数数量足够，执行原函数
        return func(...args);
    };
}

// 示例函数
function add(a, b, c) {
    return a + b + c;
}

// 将 add 函数柯里化
const curriedAdd = curry(add);

// 使用柯里化后的函数
console.log(curriedAdd(1)(2)(3)); // 输出: 6
console.log(curriedAdd(1, 2)(3)); // 输出: 6
console.log(curriedAdd(1, 2, 3)); // 输出: 6
