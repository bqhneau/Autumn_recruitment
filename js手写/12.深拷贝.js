function deepClone(obj) {
    // 检查是否为对象或数组
    if (typeof obj !== 'object' || obj === null) {
        return obj; // 如果是基本类型，直接返回
    }

    // 创建数组或对象的容器
    let clone = Array.isArray(obj) ? [] : {};

    // 遍历对象的属性
    for (let key in obj) {
        // 使用 hasOwnProperty 检查是否为对象自身的属性
        if (obj.hasOwnProperty(key)) {
            // 递归地拷贝对象的属性值
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}


function myDeepClone(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = myDeepClone(obj[key])
        }
    }

    return clone
}
    


// 测试
const original = {
    name: 'ChatGPT',
    info: {
        age: 3,
        language: ['JavaScript', 'Python']
    },
    active: true
};

const copy = myDeepClone(original);
console.log(copy);