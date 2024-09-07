function instanceOf(a, B){

    let p = a;

    // 遍历 a 的原型链 看能否找到 B 的原型
    while(p){
        if(p == B.prototype){
            return true;
        }
        p = p.__proto__  // 沿着 __proto__ 遍历
    }
    return false
}

const arr = []
console.log(instanceOf(arr,Array));  // true

const obj = {};
console.log(instanceOf(obj, Object));  // true