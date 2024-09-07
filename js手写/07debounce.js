function debounce (func,delay){
    // 判断是否为函数
    if(typeof func !== 'function'){
        return 'func必须为函数'
    }

    // 初始化timer
    let timer = null;

    // 返回一个新函数, 用来被页面调用
    return function(){
        let args = arguments;
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

/*
    遗留问题为什么用闭包 防抖函数怎么运行的
        【解决】 
            1、我们使用【防抖函数】包裹【函数】会生成一个【新函数】
            2、这个新的函数在被使用时会自动执行
            3、这解释了为什么防抖函数被调用时, 不需要额外的括号

    为什么需要更改this指向
        【解决】
            1、默认情况下，在非严格模式下，定时器内部的 this 指向全局对象 【window】，而不是 fn 原本所在的作用域对象。
            2、为了让 fn 跟调用时的this指向 一致【也就是能拿到外面的this指向】, 需要通过 apply 更改下
            3、防抖函数里面的 this 实际上跟如何调用有关
-------------------------------------------------------------------------------------------------
            【改变this的原因】让 func 的 this指向 与防抖函数调用时一致
             如果不改变this，func 将永远指向 window || undefined 
*/ 


// 版本2【推荐】
function debounce(fn, delay) {
    let timer = null;// 初始化定时器

    // 返回一个经过防抖处理的函数，
    // ...args剩余参数，可以把不定数量的参数放在args里
    return function(...args) {
       if (timer) clearTimeout(timer); // 如果定时器存在，则清除定时器
       // 给定时器赋值
       timer = setTimeout(() => {
         fn.apply(this, args); // 修正this的指向
       },delay)
    }
 }