// 前置知识
const fn = function (a, b) {
  console.log('-----', this.name, a, b);
};

const obj = {
  name: 'obj',
};

fn.call(obj, 1, 2);

Function.prototype.call.call(fn, obj, 1, 2);

/*
  下面这两行是等价的
    1、误区一：参数三个 => 四个
      实际上，call 的参数是 n 个，除了第一个参数是 this 指向的对象，后面的参数是传递给函数的参数
    2、根据 call 的实现原理：改变this指向,实际上只是将 fn 先假绑在 obj 上, 故有 obj.fn，二者本质如下
      Function.prototype.call.call(fn, obj, 1, 2);
        ==> fn.call(obj, 1, 2);
        ==> obj.fn(1, 2);
      fn.call(obj, 1, 2);
        ==> obj.fn(1, 2);
*/



// ----------------------------

const r = console.log.call.call.call.call.call.call.call.apply(
  (a) => a,
  [1, 2, 3],
);

console.log(r);


/*
  分析过程如下
  ===> const r = Function.prototype.call.apply((a) => a, [1, 2, 3]);  // (a) => a 替换为 fn
  ===> const r = fn.call(1, 2, 3);  // call 第一个参数是 this
  ===> const r = fn(2, 3);
  ===> const r = 2;
*/


