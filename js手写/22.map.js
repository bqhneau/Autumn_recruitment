/*
    1、传入的参数是一个函数
    2、返回callback 的返回值 存入数组 作为结果
*/ 


Array.prototype.myMap = function(callback){
    if(typeof callback !== 'function'){
        throw new TypeError(callback + '必须是一个函数');
    }

    const res = [];
    for(let i=0;i<this.length;i++){
        res.push(callback(this[i],i,this))
    }

    return res;
}


// 测试
const arr = [1, 2, 3, 4, 5];
const result = arr.myMap(num => num * 2);
console.log(result); // 输出: [2, 4, 6, 8, 10]
