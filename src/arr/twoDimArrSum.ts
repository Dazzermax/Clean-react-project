/* eslint-disable */
// @ts-nocheck



// 14. В функцию передается двумерный массив в виде треугольника (горки). Неообходимо найти наибольшую сумму
// от вершины до низа треугольника. С числа сверху мы можем переходить лишь на нижнее число и его соседей.
// Массив может иметь очень большое кол-во вложенных массивов.



// function maxSum(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].reduce((prev, curr) => prev >= curr ? prev: curr)
//     }

//     return sum
// }

function maxSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            sum += Math.max(...arr[i])
        }
    }

    return sum
}


console.log(maxSum([
    [1],
    [4, 8],
    [1, 5, 3]
]
))               // 14

console.log(maxSum([
    [1],
    [-3, -4],
    [2, 1, 9]
]
))               // 7




