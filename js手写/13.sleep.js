/*
    在 JavaScript 中，没有内置的 sleep 函数，但可以使用 setTimeout 实现类似效果
*/ 

function Sleep(delay) {
    return new Promise(resolve => {
      setTimeout(resolve, delay)
    })
  };