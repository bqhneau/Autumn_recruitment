/*
    【理解误区】
        浅拷贝指的是在拷贝复杂数据类型时，只能拷贝一层，如果复杂数据类型的属性仍然是复杂数据，则只能拷贝地址
        所以 浅拷贝出来的对象与源对象 地址不同
*/ 


const original = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "cycling"],
};

const shallowCopy = Object.assign({}, original);
// 或者使用扩展运算符
// const shallowCopy = { ...original };

shallowCopy.name = "Bob"; 
shallowCopy.hobbies.push("swimming");

// console.log(original.name); // 输出: Alice (不同)
// console.log(original.hobbies); // 输出: ["reading", "cycling", "swimming"] (相同)

console.log(original === shallowCopy);  // 【false】


// 浅拷贝的实现
function shallowClone (obj) {
    if(typeof obj !== 'object' || obj === null ){
        return obj
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = obj[key]
        }
    }

    return clone
}