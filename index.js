const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']];

// Напишите функцию, которая считает сумму чисел в каждом вложенном массиве
// и возвращает массив с суммами этих чисел в качестве значений
// если вы встречаете цифру в виде строки, ее нужно нормализовать и посчитать тоже
// выведите итоговый массив в консоль

function sumArr (arr) {
    const arrayIndex = arr.map(function (arrEl) {
        const arrIndexSum = arrEl.reduce(function(sum, elem) {
            typeof(elem) === 'string' ? elem = Number(elem) : elem ;
            isNaN(elem) ? elem = 0 : elem ;
            return sum + elem;
        }, 0);
        return arrIndexSum;
    });
    return arrayIndex;
};

console.log(sumArr(array));
