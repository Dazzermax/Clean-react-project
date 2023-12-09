/* eslint-disable */
// @ts-nocheck

// 4. В функцию передается целое число. Необходимо сделать так,
// чтобы функция возвращала сумму всех цифр в переданном числе.

// function sumDigits(num) {
    
//     const numStr = String(Math.abs(num));
//     let sum = 0;
//     for (let char of numStr) {
//         sum+= Number(char)
//     }
    
//     return sum
// }


function sumDigits(num: number): number {
    const numStr = String(Math.abs(num));

    const sum = numStr.split('').reduce((res, curr) => Number(res) + Number(curr));

    return sum
}

console.log(sumDigits(123)) // 6
console.log(sumDigits(904)) // 13