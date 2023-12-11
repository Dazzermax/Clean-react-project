/* eslint-disable */
// @ts-nocheck

// 10. Реализовать функцию, которая будет работать при любом количестве вызовов верно. Внутрь функции всегда передается
// число. Возвращает сумму переданных чисел.


// function add(a) {
//     let res;

//     function addToSum(b) {
//         if (b) {
//             add()
//         }
//     }
// }

function add(num) {

    if (num === undefined) {
        return 0
    }

    function curryAdd(b) {
        if (b !== undefined) {
            return add(num + b)
        } else return num
    }

    return curryAdd
}
  

console.log(add()); // Выведет: 3
console.log(add(5)(2)()); // Выведет: 7
console.log(add(3)()); // Выведет: 3





