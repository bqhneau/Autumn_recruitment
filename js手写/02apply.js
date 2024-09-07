/*
    【说明】
        apply方法使用一个指定的this值和单独给出的一个参数来调用一个函数。
        apply方法接受的参数是一个数组。
        返回值是函数执行后的结果。
    【原理】
        与call基本一致，唯一区别为接受参数不同，apply为数组形式

    【实现】
        将形参由原来的参数序列【...arg】变为【arg】
        但里面对象调用时传参不变

*/


Function.prototype.myApply = function(context,arg){
    const cxt = context || window;
    const func = Symbol('func');
    cxt[func] = this;
    const result = cxt[func](...arg);
    delete cxt[func];
    return result;
}