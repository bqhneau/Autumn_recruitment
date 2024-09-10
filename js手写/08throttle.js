// 时间戳写法
function throttle(func, delay) {
    if (typeof func !== 'function') {
        throw Error('func必须是一个函数')
    };
    let lastTime = 0;
    return function () {
        let args = arguments;
        var nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            func.apply(this, args);
            // 执行完一次，时间再重置为当前时间
            lastTime = nowTime;
        };
    };
};


// 版本2【推荐】
function throttle(fn, delay) {
    let timer = null; // 初始化定时器
    // 返回一个经过节流处理的函数
    return function (...args) {
        if (timer) return; // 如果定时器存在，则直接选择无视
        // 给定时器赋值
        timer = setTimeout(() => {
            fn.apply(this, args); // 修正this的指向
            //  函数执行完后初始化定时器
            // 【这行是必要的：否则定时器只执行一次】
            timer = null;
        }, delay);
    }
}
