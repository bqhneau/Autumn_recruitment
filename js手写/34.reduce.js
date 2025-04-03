/*
  ✅ reduce() 的核心逻辑
    1.	遍历数组，累积计算结果。
    2.	支持 initialValue，如果没提供，则使用数组第一个元素。
    3.	数组为空且未提供 initialValue，会报错。
*/


Array.prototype.myReduce = function (callback, initialValue) {
  // 获取数组
  const arr = this;
  if (!Array.isArray(arr)) {
      throw new TypeError("this is not an array");
  }

  // 初始索引
  let accumulator = initialValue;
  let startIndex = 0;

  // 如果没有提供 initialValue，则用数组的第一个元素作为初始值
  if (accumulator === undefined) {
      if (arr.length === 0) {
          throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = arr[0];
      startIndex = 1; // 从第二个元素开始
  }

  // 遍历数组，执行回调
  for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};