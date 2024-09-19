function chunkArray(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      // 使用slice方法从当前索引开始，截取chunkSize长度的元素
      console.log(i,i + chunkSize)
      // 如果长度超了 slice()会简单地将数组从开始索引切分到数组的末尾
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
  
  // 示例数组
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // 调用函数，每两个元素为一组
  const chunkedArray = chunkArray(myArray, 2);
  
  console.log(chunkedArray);
  