/*
    call方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
    call方法接受的是一个参数列表。
    返回值是函数执行后的结果。
*/


/*
    【原理】：
        对象中调用函数 函数的this指向为该对象

    【实现】：
        1、将原函数this指向的函数赋值给对象 
        2、让该对象调用此方法 实现this指向的绑定

*/ 

Function.prototype.myCall = function (context,...arg) {

    // 1、获取传入的上下文对象
    const cxt = context || window;

    // 2、声明对象唯一属性
    const func = Symbol('func');

    // 【此处 this 为调用该函数的方法 比如 f1.myCall 则this指向为f1】
    // 3、将【此处this指向的函数】赋值给context对象的特定属性 
    cxt[func] = this;

    // 4、通过该对象调用此方法 实现了this指向的绑定
    // 因为对象中调用函数，函数的this指向为该对象 
    const result = cxt[func](...arg);

    // 5、删除多余属性 避免对源对象造成影响
    delete cxt[func]

    // 6、直接返回调用结果
    return result

}