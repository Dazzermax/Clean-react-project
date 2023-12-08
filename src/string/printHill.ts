/* eslint-disable */
// @ts-nocheck
// Напишите функицю, в которую передается целое число. Функция должна вывести горку как показано в примере с тем
// числом линий, которое дыло передано в параметр функции


// function printHill(levels) {
//     debugger
//     let hill = '';

//     for (let i = 1; i <= levels; i++) {
//         for (let j = 0; j < i; j++) {
//             hill+= '#'
//         }
//         hill += '\n'
//     }

//     return hill
// }

function printHill(levels) {
    let hill = '';

    for (let i = 1; i <= levels; i++) {
       hill = hill + '#'.repeat(i) + '\n'
    }

    return hill
}


console.log(printHill(5))

// #
// ##
// ###
// ####
// #####