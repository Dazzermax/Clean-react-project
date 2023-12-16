/* eslint-disable */
// @ts-nocheck


// 22. Необходимо реализовать функцию, которая принимает массив и возвращает максимальное количество одинаковых элементов

function countEqualElements(arr) {
    let countEqual = 0;
    
    if (arr.length > 0) {
        countEqual = 1;
    }

    const set = new Set()

    for (let elem of arr) {
        if (set.has(elem)) {
            countEqual++
        } else {
            set.add(elem)
        }
    }

    return countEqual
}

console.log(countEqualElements([2, 13, 5, 9, 7])) // 1
console.log(countEqualElements([0, 1, 3, 0, 0])) //3



