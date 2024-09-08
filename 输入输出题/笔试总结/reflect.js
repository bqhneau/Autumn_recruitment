/*
    理解 new.target
        new.target 是一个元属性，当一个函数或构造器使用 new 关键字调用时，new.target 会指向那个被调用的构造函数。
        如果函数是直接调用的（没有使用 new），new.target 就是 undefined。
*/ 



function func(){
    console.log(new.target === func);
}

new func();  // new调用 指向func 

Reflect.construct(func,[]);   // 相当于 new

func.call({});  // undefined