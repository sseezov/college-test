const array = [[12, 3, 4], [0, 0, 0], [23, 5, 6], [123, '6', -5], [0, '0', 'O', 1], ['test']]
import _ from 'lodash'
// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
// выведите итоговый массив в консоль
function sumArray(arr) {
    return arr.map(p => {
        let sum = _.sumBy(p, f => isNaN(Number(f)) ? null : Number(f))
        if (sum === null) {
            return []
        }
        return [sum]
    })
}

console.log(sumArray(array))