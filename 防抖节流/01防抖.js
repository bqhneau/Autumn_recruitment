// 1. 返回防抖动的新函数
// 2. 原函数中的 this 可以正常使用
// 3. 原函数中的 参数 可以正常使用


function debounce(func, wait = 0) {
    let timeId
    // 防抖动的新函数
    return function (...args) {
        // 【这里传递 this 原因 ：setTimeout中使用的普通函数】
        let _this = this
        if(timeId) clearTimeout(timeId)
        timeId = setTimeout(function () {
            // 通过apply调用原函数,并指定this和参数
            func.apply(_this, args)
        }, wait)
    }
}
