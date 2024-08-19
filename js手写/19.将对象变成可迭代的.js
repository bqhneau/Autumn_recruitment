const myObject = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function() {
        const entries = Object.entries(this); // 将对象的键值对转换为数组
        let index = 0;
        return {
            next: function() {
                if (index < entries.length) {
                    return { value: entries[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// 现在可以使用for...of循环来迭代myObject
for (const [key, value] of myObject) {
    console.log(`${key}: ${value}`);
}

// 也可以用展开运算符将其展开为数组
console.log([...myObject]); // [['a', 1], ['b', 2], ['c', 3]]
