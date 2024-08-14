Function.prototype.myBind = function(context, ...arg){
    // bind 返回一个可以改变this指向的新函数 待执行

    return (...restArg) => {
        const ctx = context || window;

        const key = Symbol('key');

        ctx[key] = this;

        // 将两部分参数拼一起
        const res = ctx[key](...arg,...restArg)

        delete ctx[key]

        return res
    }
}

// 测试
const obj = {
    a:1,
    b:2,
}

const fn = function(...arg){
    console.log(this.a);  // 1
    console.log(...arg);  // 1,2,3,4,5,6
}

const mybind = fn.myBind(obj,1,2,3)
mybind(4,5,6)