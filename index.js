const array = [
  [12, 3, 4],
  [0, 0, 0],
  [23, 5, 6],
  [123, "6", -5],
  [0, "0", "O", 1],
  ["test"],
];

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже

// выведите итоговый массив в консоль
const strNormalize = (string) =>
  Number.isNaN(Number(string)) ? 0 : Number(string);

const sumArrayNormalized = (array) => {
  const result = array.map((arr1) => {
    const sum = arr1.reduce((acc, num) => {
      normNum = typeof num === "string" ? strNormalize(num) : num;
      return (acc += normNum);
    }, 0);
    return sum;
  });
  return result;
};
console.log(sumArrayNormalized(array));
