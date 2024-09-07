const myNew = function(construstor,...arg){
    const obj = {};

    obj.__proto__ = construstor.prototype;

    // 将构造函数的this指向绑定到 obj 并执行
    const res = construstor.apply(obj,arg);

    // 这里需要注意 typeof null == 'object'
    return typeof res == 'object' && result !== null ? res : obj
}


// 测试

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = myNew(Person, 'John', 25);

console.log(person1.name); // 输出: John
console.log(person1.age);  // 输出: 25
console.log(person1 instanceof Person); // 输出: true
