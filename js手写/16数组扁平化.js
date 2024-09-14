arr =  [1, [1,2], [1,2,3]];

// 1、使用 flat 加 Infinity
function myFlat (arr) {
    if(!Array.isArray(arr)){
        throw Error('arr 必须是一个数组')
    }

    return arr.flat(Infinity)
}


// 2、使用正则表达式 /\[|\]|\g
function myFlat(arr){
    if(!Array.isArray(arr)){
        throw Error('arr 必须是一个数组')
    }
    
    // 将数组转换为字符串
    const str = JSON.stringify(arr);
    // 正则替换掉方框号
    let flatStr = `[${str.replace(/\[|\]|/g,'')}]`;
    // 转换为对象 返回
    return JSON.parse(flatStr);
}


// 3、使用递归实现
function myFlat(arr){
    if(!Array.isArray(arr)){
        throw Error('arr 必须是一个数组')
    }

    let result = [];
    arr.forEach(item =>{
        // 如果元素为数组 继续展开
        if(Array.isArray(item)){
            result = result.concat(myFlat(item))
        }else{
            // 不是数组 追加到结果中
            result.push(item)
        }
    })

    return result
}


// 4、使用展开运算符
function myFlat(arr){
    if(!Array.isArray(arr)){
        throw Error('arr 必须是一个数组')
    }

    // arr.some(Array.isArray)
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}


console.log(myFlat(arr));