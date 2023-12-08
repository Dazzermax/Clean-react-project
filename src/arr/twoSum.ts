/* eslint-disable */
// @ts-nocheck

// 3. В функцию передается массив целых чисел и число b. Необходимо написать функцию, которая вернет булевое значение,
// true в случае если в переданном массиве есть два числа, сумма которых равна k, иначе false.

// function check(arr, b) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === b) {
//                 return true
//             } else {
//                 continue
//             }
//         }
//     }

//     return false
// }

function check(nums, target) {

    const map = new Map()

    for (let i = 0; i < nums.length; i++) {

        const pair = target - nums[i]

        if (map.has(pair)) {
            return true
        }

        map.set(nums[i], true)
    }
    return false
}
console.log(check([2,7,11,15], 9)) // true
console.log(check([10, 15, 3, 7], 27)) // false

