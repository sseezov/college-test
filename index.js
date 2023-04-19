const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']]

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
1
// выведите итоговый массив в консоль
function final(array){
const result = []
array.map((ars) => {
  const preres = [0]
  ars.map((num) => {
    if(Number(num) > -Infinity){
      const tot = preres[0] + Number(num)
      preres[0] = tot
    } else if(preres[0] < -Infinity) preres[0]
    else {
        preres[0] = null
    }
  })
  result.push(preres)
})
return result.flat().filter(function (el) {
    return (el != null)}).map(x => [x])
}
console.log(final(array))