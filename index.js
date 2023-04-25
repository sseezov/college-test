const array = [
  [12, 3, 4],
  [0, 0, 0],
  [23, 5, 6],
  [123, '6', -5],
  [0, '0', 'O', 1],
  ['test'],
];

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже

// выведите итоговый массив в консоль

const sumArr = (array) => {
  const result = array.map((item) => {
    return [
      item.reduce((acc, element) => {
        return isNaN(Number(element)) ? null : acc + Number(element);
      }, 0),
    ].filter((element) => element !== null);
  });

  return result;
};

console.log(sumArr(array));
