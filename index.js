const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']]

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
1
// выведите итоговый массив в консоль

const copiedAndSortedArr = (arr) => {
    const result = [];
    arr.map((inputArr) => {
        result.push(inputArr.filter((el) => !isNaN(Number(el))))
    })
    return result;
};

const sum = (arr) => {
    const normalizeArr = copiedAndSortedArr(arr);
    const result = [];

    normalizeArr.map((el) => {
        let r = 0;

        el.map((num) => {
            r += Number(num);
        })
        result.push(r);
    })

    return result;
}

console.log(sum(array))