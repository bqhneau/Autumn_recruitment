// #### 核心步骤:
// 1. 返回节流的新函数
// 2. 原函数中的`this`可以正常使用
// 3. 原函数中的**参数**可以正常使用
// 4. 定时器函数执行后, timeId 置空


// 节流工具函数
function throttle(func, wait = 0) {
    let timeId
    return function (...args) {
        if (timeId !== undefined) {
            return
        }
        const _this = this
        timeId = setTimeout(() => {
            func.apply(_this, args)
            timeId = undefined
        }, wait)
    }
}