
for(let i =0; i<3; i++){
    setTimeout(()=>{
        console.log('定时器',i);  // 块级作用域影响：0 1 2
    })
    console.log('同步',i);  // 0 1 2
}


for(var i =0; i<3; i++){
    setTimeout(()=>{
        console.log('定时器',i);  // var: 3 3 3
    })
    console.log('同步',i); // 0 1 2
}