function throttle(func, delay=500){
    let timer
    return function(...arg){
        if(timer) return
        timer = setTimeout(()=>{
            func.apply(this,arg);
            timer = null
        },delay)
    }
}