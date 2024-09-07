var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

// 1、使用 set 数据结构
// 【缺】 无法去掉 {}  NaN

function uniqueSet(arr){
    if( !Array.isArray(arr)){
        throw Error('must be a arr')
    }

    return Array.from(new Set(arr))
}

console.log(uniqueSet(arr));   // 13 {} NaN


/*
    2、创建一个新数组，使用【indexOf】或者【includes】判断是否存在的方式去重
        indexOf 有返回索引 如果没有 返回-1 
        includes 有返回true 如果没有 返回false
    【缺】 无法去掉 {}  NaN
*/
function uniqueArr(arr){
    if( !Array.isArray(arr)){
        throw Error('must be a arr')
    }

    let res = []
    arr.forEach(item =>{
        // res.indexOf(item) === -1 && res.push(item)
        !res.includes(item) && res.push(item)
    })

    return res
}

console.log(uniqueArr(arr));  // 13 {} NaN


/*
    3、排序看索引是否相同 indexOf
    【缺】无法去掉{} NaN去掉了
*/ 
function uniqueSort(arr){
    if(!Array.isArray(arr)){
        throw Error('arr 必须为一个数组');
    }

    // sort 改变原数组 使用concat拷贝一份
    const sortArr = arr.concat().sort();
    let res = []
    sortArr.forEach((item,index)=>{
        sortArr.indexOf(item) === index && res.push(item)
    })

    return res
}
console.log(uniqueSort(arr));  // 12 {}