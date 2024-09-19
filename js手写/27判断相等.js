// 仅支持判断常见数据类型 
// 数值 布尔 字符 undefined null object

function deepEqual(value1, value2) {
    if (value1 === value2) return true; // 首先检查是否严格相等
    if (typeof value1 !== 'object' || typeof value2 !== 'object' || value1 === null || value2 === null) {
        return false; // 排除非对象的情况
    }

    let keys1 = Object.keys(value1);
    let keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) return false; // 键数量不一致时，返回false

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
}

// 测试
let obj1 = {a: 1, b: {c: 2}};
let obj2 = {a: 1, b: {c: 2}};
console.log(deepEqual(obj1, obj2)); // true

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(deepEqual(arr1, arr2)); // true
