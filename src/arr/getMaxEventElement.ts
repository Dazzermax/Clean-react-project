/* eslint-disable */
// @ts-nocheck

// 7. В функцию пепедается массив с целыми числами. Необходимо реализовать функцию так, чтобы она возвращала значение
// большего элемента массива, которвый записан в четном индексе включая 0.

function getMaxEvenElement(arr) {
    let max;

    if (arr.length > 0) {
        max = arr[0]
    }

    if (arr.length === 1) {
        return max
    }

    for (let i = 2; i < arr.length; i+=2) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}


// function getMaxEvenElement(arr) {
//     let max;
//     let i = 2;

//     if (arr.length > 0) {
//         max = arr[0]
//     }

//     if (arr.length === 1) {
//         return max
//     }

//     while (i < arr.length) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }

//         i+=2;
//     }

//     return max
// }

// function getMaxEvenElement(arr) {
//     return arr.reduce((max, curr, i) => {
//         if (i % 2 === 0) {
//             return curr > res ? curr : res
//         } else {
//             return res
//         }
//     })
// }

// function getMaxEvenElement(arr) {
//     let max

//     if (arr.length > 0) {
//         max = arr[0]     
//     }

//     for (let i = 2; i < arr.length; i++ ) {
//         if (i % 2 === 0) {
//             if (arr[i] > max) {
//                 max = arr[i]
//             }
//         }
//     }

//     return max
// }

console.log(getMaxEvenElement([5, -7, -1, 12, 3, 0])) // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])) // 31


