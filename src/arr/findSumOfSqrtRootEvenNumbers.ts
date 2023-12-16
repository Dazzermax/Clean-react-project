/* eslint-disable */
// @ts-nocheck

// 19. В функцию передается массив с целыми числами. Необходимо реализовать функцию так, чтобы она возвращала сумму
// квадратных корней для всех четных чисел переданного массива.


function findSumOfSqrtRootEvenNumbers(arr) {
    let sum = 0;
    if (arr.length === 0) {
        return sum
    }

    for (let num of arr) {
        if (num % 2 === 0) {
            sum+= Math.sqrt(num) 
        }
    }

    return sum
}

console.log(func([3, 4, 9, 16, 1, 0])) // 6


