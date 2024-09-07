function myAjax(url){
    return new Promise((resolve,reject)=>{
        // 1、声明一个xhr对象
        const xhr = new XMLHttpRequest();
        // 2、绑定open方法 
        // 指定请求类型，请求URL，和是否异步
        xhr.open('GET',url,open);
        // 3、判断响应是否成功
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    resolve(JSON.stringify(xhr.response))
                }else{
                    reject('error')
                }
            }
        }
        // 4、发送请求
        xhr.send()
    })
}