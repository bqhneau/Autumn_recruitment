function convert(arr) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object' || arr[i] == null) {
            res.push({ 
                value: arr[i] 
            })
        } else if (Array.isArray(arr[i])) {
            // 递归实现
            res.push({ 
                children: convert(arr[i]) 
            })
        }
    }

    return res
}


// 测试数组
const arr = [1, 2, 3, [4, 5]];

let o = convert(arr);
console.log(JSON.stringify(o));