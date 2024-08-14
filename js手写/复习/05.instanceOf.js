function myInstanceOf (a, B){
    let p = a;

    while(p){
        if(p == B.prototype){
            return true;
        }

        p = p.__proto__;  // 沿着原型链遍历
    }

    return false
}


const arr = [1,2,3]
console.log(myInstanceOf(arr,Array));