/*
    new 怎么理解呢？
        new 是实现【继承】的一种方式；
        调用 new 的本质就是返回一个继承【构造函数】属性的【对象】
        1、首先 new 创建了一个对象 ，并且这个对象指向 构造函数
        2、这样以来 ,就实现了【新创建的对象】可以继承 【构造函数的属性】
*/ 


function myNew (constructor, ...arg){
    // 1、创建一个空对象
    let obj = {};

    // 2、链接原型
    obj.__proto__ = constructor.prototype;

    // 3、改变this：
    // 将构造函数内部的 this 绑定到 obj
    // 【目的】确保构造函数能够正确地初始化新对象的属性和方法
    let res = constructor.apply(obj, arg)

    // 4、返回对象
    // a、调用 new 的本质就是返回一个继承【构造函数】属性的【对象】
    // b、如果构造函数没有显式返回一个【对象】，则返回【新创建的对象】，即obj
    return res instanceof Object ? res : obj;
}