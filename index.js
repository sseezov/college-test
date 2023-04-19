const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']]

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
1
// выведите итоговый массив в консоль
const res = (a) => {
  let count = 0;
  a.map((el) => count += Number(el));
  return count;
}
const sum = (arr) => arr.map((nestedArr) => {
   const temp = nestedArr.filter((el) => !isNaN(Number(el)));
   if (temp.length !== 0) {
    return res(temp);
  }
  return temp;
});

console.log(sum(array));
