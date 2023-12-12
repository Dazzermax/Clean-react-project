/* eslint-disable */
// @ts-nocheck

/*

13.

n! означает n * (n - 1) * ... * 3 * 2 * 1
Например 10! = 10 * 9 * ... * 3 * 2 * 1 = 3628800, сумма цифр в полученном числе 10! равна
3 + 6 + 2 + 8 + 8 + 0 + 0 = 27
Найдите сумму цифр в числе 100.

Решение не должно использовать циклы. Использовать необходимо методы массивов

*/


function calcFactorial(n: number) {
    
    const initial = new Array(n).fill(n)

    const factorial = initial.reduce((prev, curr, index) => {
        
        prev = BigInt(prev) * (BigInt(curr) - BigInt(index))
        return prev
    })

    return String(factorial).split('').reduce((curr, prev) => Number(curr) + Number(prev))
}