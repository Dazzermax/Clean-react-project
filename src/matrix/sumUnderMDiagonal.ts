/* eslint-disable */
// @ts-nocheck

// 16. Функция принимает массив, необходимо реализовать функцию так, чтобы она возвращала сумму чисел под главной
// диагональю матрицы.


function calculateSumUnderMainDiagonal(matrix) {
    if (matrix.length === 0) {
        return []
    ;}

    const lastRowIndex = matrix.length - 1;

    let sum = 0;
    for (let row = lastRowIndex; row > 0; row--) {
        for (let col = row - 1; col >=0; col--) {
            sum+=matrix[row][col]
        }
    }

    return sum
}

const matrix = [
    [5, 9, -1],
    [1, 7, 2],
    [6, 4, 14]
]
// 11

const matrix2 = [
    [5, 73, 9, 81, -6],
    [1, 8, 22, 18, -66],
    [57, 7, -19, 8, 0],
    [2, -7, 54, 1, 33],
    [6, 21, 38, -4, 11]
]

console.log(calculateSumUnderMainDiagonal(matrix)) // 1 + 6 + 4 = 11

console.log(calculateSumUnderMainDiagonal(matrix2)) // 1 + 57 + 7 + 2 - 7 + 54 + 6 + 21 + 38 - 4 = 175