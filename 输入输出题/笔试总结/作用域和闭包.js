var arr = [];

for (var i = 0; i < 3; i++) {
    arr.push(function () {
        return i;  // 每次将函数存起来不执行【闭包】
    })
    console.log(arr[i]())  // 循环内调用
}

arr.forEach(function (arr) {
    console.log(arr())   // 循环外调用 var全局共享
})


//  如何解决输出 1 2 3

// 法一：循环时 输出（趁着变量还没被污染）
var arr=[]

for(var i=0;i<3;i++){
    arr[i]=function(){
        console.log(i);
    }
    arr[i]()
}

arr.forEach(function(item){
    item()
})


// 法二：闭包解决
var arr = []

for (var i = 0; i < 3; i++) {
    // 用闭包隔离变量污染
    (function foo(i) {
        arr[i] = function () {
            console.log(i);
        }
    })(i)
}

arr.forEach(function (item) {
    item()
})


// 法三：使用 let