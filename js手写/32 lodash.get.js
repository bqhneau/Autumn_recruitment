function get(obj, path, defaultValue) {
    const keys = Array.isArray(path) ? path : path.split('.');
    let result = obj;

    for (let key of keys) {
        result = result != null ? result[key] : undefined;
    }
    
    return result !== undefined ? result : defaultValue;
}

// 示例用法
const data = { a: { b: { c: 42 } } };
console.log(get(data, 'a.b.c', 'default')); // 42
console.log(get(data, 'a.b.d', 'default')); // 'default'
