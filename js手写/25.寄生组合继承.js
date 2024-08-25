/*
    核心步骤:
        1. 通过构造函数来继承属性
        2. 通过原型链来继承方法
    Object.create()    
        将一个对象作为原型,创建一个新的对象    
*/ 


// 父类构造函数
function Animal(name) {
    this.name = name;
}

// 父类的原型方法
Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
};

// 子类构造函数
function Dog(name, breed) {
    // 1. 通过构造函数来继承属性
    Animal.call(this, name);
    this.breed = breed;
}

// 2. 通过原型链来继承方法
// 设置子类的原型为父类的一个实例【这个实例可以访问父类，即实现了继承】
Dog.prototype = Object.create(Animal.prototype);

// 修正子类的构造函数指向【原型上的constructor默认指向自身】
Dog.prototype.constructor = Dog;

// 可以增加子类特有的方法
Dog.prototype.bark = function () {
    console.log(this.name + ' barks.');
};

// 测试代码
var myDog = new Dog('Rex', 'Golden Retriever');
myDog.speak(); // 输出: Rex makes a noise.
myDog.bark();  // 输出: Rex barks.
