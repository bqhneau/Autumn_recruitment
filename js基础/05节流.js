function throttle(func, delay) {
    if (typeof func !== 'function') {
        throw Error('func必须是一个函数')
    };
    let lastTime = 0;
    return function() {
        let args = arguments;
        var nowTime = Date.now(); 
        if(nowTime - lastTime > delay){
            func.apply(this, args);
            lastTime = nowTime;
        };
    };
};


// 版本2
function throttle(fn, delay){
    let timer = null; // 初始化定时器
    // 返回一个经过节流处理的函数
    return function (...args){
      if(timer) return; // 如果定时器存在，则直接返回
        // 给定时器赋值
       timer = setTimeout(() => {
         fn.apply(this, args); // 修正this的指向
         timer = null; //  函数执行完后初始化定时器
       },delay);
    }
 }
