var p = {
    a:1
}

var proxy = new Proxy(p,{
    ownKeys(target){
        return // 后跟非数组类型会报错
    }
})


console.log(Object.keys(proxy))