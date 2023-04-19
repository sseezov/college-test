const array = [[12, 3, 4], [0, 0, 0], [23, 5, 6], [123, '6', -5], [0, '0', 'O', 1], ['test']];

function sumNestedArrays(arr) {
  const result = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i += 1) {
      let sum = 0;
      let hasNum = false;
      for (let j = 0; j < arr[i].length; j += 1) {
        if (typeof arr[i][j] === 'number') {
          sum += arr[i][j];
          hasNum = true;
        } else if (typeof arr[i][j] === 'string') {
          const num = parseInt(arr[i][j], 10);
          if (!Number.isNaN(num)) {
            sum += num;
            hasNum = true;
          }
        }
      }
      if (hasNum) {
        result.push([sum]);
      } else {
        result.push([]);
      }
    }
  }

  return result;
}

console.log(sumNestedArrays(array));
