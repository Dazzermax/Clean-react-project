/* eslint-disable */
// @ts-nocheck


// 15. Дана матрица, содержащая как положительные, так и отрицательные элементы. Удалить все ее стролбцы,
// содержащие только положительные элементы.


// function removeColumnsWithPositiveElements(matrix) {
//     if (matrix.length === 0) {
//         return []
//     }

//     const resultMatrix = [];

//     const rowLength = matrix.length;
//     const columnLength = matrix[0].length;

//     const isColumnPositive = (colIndex) => {

//         for (let row = 0; row < rowLength; row++) {
//             if (matrix[row][colIndex] < 0) {
//                 return false
//             }
//         }

//         return true
//     }

//     for (let row = 0; row < rowLength; row++) {

//         let rowMatrix = []
//         for (let col = 0; col < columnLength; col++) {
//             if (!isColumnPositive(col)) {
//                 rowMatrix.push(matrix[row][col])
//             }
//         }
//         resultMatrix.push(rowMatrix)
//     }


//     return resultMatrix
// }




// // Пример использования:
// const exampleMatrix = [
//     [1, 2, -3, 4],
//     [-5, 6, 7, -8],
//     [9, 10, 11, 12]
// ];

// console.log(removeColumnsWithPositiveElements(exampleMatrix))


function removeColumnsWithPositiveElements(matrix) {
    debugger
    const rowLength = matrix.length;
    const colLength = matrix[0].length;

    for (let col = 0; col < colLength; col++) {
        let allPositive = true

        for (let row = 0; row < rowLength; row++ ) {
            if (matrix[row][col] < 0) {
                allPositive = false;
                break
            }
        }

        if (allPositive) {
            for (let row = 0; row < rowLength; row++) {
                matrix[row].splice(col, 1)
            }

            col--
            colLength--
        }

    }

 
    return matrix;
}

const exampleMatrix = [
    [1, 2, -3, 4],
    [-5, 6, 7, -8],
    [9, 10, 11, 12]
];

console.log(removeColumnsWithPositiveElements(exampleMatrix))











