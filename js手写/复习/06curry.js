/*
    1、接受参数为函数
    2、返回接受指定个数参数的函数
*/ 


function curry(fn){
    const length = fn.length;

    return function rec(...arg){
        if(arg.length < length){
            return (...restArg) => {
                return rec(...arg, ...restArg)
            }
        }

        return fn(...arg)
    }
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