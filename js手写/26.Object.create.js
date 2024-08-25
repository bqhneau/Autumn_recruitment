/* 
    Object.create()    
        将一个对象作为原型,创建一个新的实例对象
*/ 


function myObjectCreate(proto) {
    // 创建一个临时的构造函数
    function F() {}
    // 将构造函数的原型设置为传入的对象
    F.prototype = proto;
    // 返回一个新对象，这个新对象的原型指向传入的对象
    return new F();
}

// 使用 myObjectCreate 模拟 Object.create
var animal = {
    speak: function() {
        console.log('Animal speaks');
    }
};

var dog = myObjectCreate(animal);
dog.speak(); // 输出: Animal speaks
