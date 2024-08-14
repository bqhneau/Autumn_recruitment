Function.prototype.myCall = function(context,...arg){
    // 将函数绑定到对象属性 然后执行

    const ctx = context || window;

    const key = Symbol('key')

    ctx[key] = this;

    const res = ctx[key](...arg);

    delete ctx[key]

    return res
}

const obj = {
    a:1,
    b:2,
}

const fn = function(...arg){
    console.log(this.a);  // 1
    console.log(...arg);  // 1,2,3
}

fn.myCall(obj,1,2,3)