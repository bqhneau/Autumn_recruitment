class cls{};
class son extends cls{};


// son.prototype 指向 实例对象的 __proto__
// son.__proto__ 指向 构造函数的 prototyoe
console.log(son.prototype === son.__proto__);   
console.log(son.__proto__.prototype == cls.prototype)

// 这里相等的原因在于 Function 特殊
console.log(Function.prototype  === Function.__proto__)   // true

// 顶端
console.log(Object.prototype.__proto__);  // null
