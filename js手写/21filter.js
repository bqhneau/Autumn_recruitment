/*
    这里不好理解的点在于：
        1、传入的参数是一个函数
        2、根据函数的返回值 决定是否筛选
*/ 

Array.prototype.myFilter = function(callback){
    if(typeof callback !== 'function'){
        throw new TypeError('入参必须是函数！')
    }

    const res = [];
    for(let i = 0; i<this.length;i++){
        callback(this[i]) && res.push(this[i])
    }

    return res;
}


// 测试
const arr = [1, 2, 3, 4, 5];
const result = arr.myFilter(num => num > 3);
console.log(result); // 输出: [4, 5]
