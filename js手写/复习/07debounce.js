// function debounce(func, delay = 500) {

//     let timer

//     // 返回一个防抖的函数, 以供使用
//     return function(...arg) {
//         if (timer) clearTimeout(timer)
//         timer = setTimeout(() => {
//             // 【改变this的原因】让 func 的 this指向 与防抖函数调用时一致
//             // 如果不改变this，func 将永远指向 window || undefined 
//             func.apply(this, ...arg)
//         }, delay)
//     }
// }

function debounce(func, delay = 500){

    let timer
    return function(...arg){
        if(timer) clearTimeout(timer)
        
        timer = setTimeout(()=>{
            func.apply(this, arg)
        },delay)    

    }
}


