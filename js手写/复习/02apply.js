Function.prototype.myApply = function(context, arg){
    const ctx = context || window;

    const key = Symbol('key');

    ctx[key] = this;

    const res = ctx[key](...arg);

    delete ctx[key];

    return res
}


// 测试

const obj = {
    a:1,
    b:2,
}

const fn = function(...arg){
    console.log(this.a);  // 1
    console.log(...arg);  // 1,2,3
}

fn.myApply(obj,[1,2,3])