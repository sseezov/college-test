const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']]

const getSum = (data) => {
  const resultArr = data.map((arr) => {
    const sum = arr.reduce((acc, elem) => {
      if (!isNaN(Number(elem))) { acc += Number(elem); }
      return acc;
    })
    return sum;
  })

  return resultArr;
};

//console.log(getSum(array));


// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
 
// выведите итоговый массив в консоль

const nestedNumbers = [[1, 2, 3, 4], [1, 2, 3], [2, 2], [1, 11111], [1, 2, 3]];

const getSumNumbers = nestedNumbers.map((arr) => {
  return arr.reduce((acc, elem) => {
    acc += elem;
    return acc;
  })
})

console.log(getSumNumbers);