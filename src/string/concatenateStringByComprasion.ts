/* eslint-disable */
// @ts-nocheck

// 18. В функцию передается две строки. Необходимо вернуть из функции строку, в которой будет записана меньшая строка,
// затем большая строка, а затем снова меньшая.

// Если сравнение boolean (by Unicode)

function concatenateStringsByUnicode(a, b) {
    if ( a > b ) {
        return b + a + b 
    } else return a + b + a
}
// Если сравнение по количеству символов

function concatenateStringsByLength(a, b) {
    if ( a.length > b.length ) {
        return b + a + b 
    } else return a + b + a
}


console.log(concatenateStringsByUnicode('1111','22')) / 1221
console.log(concatenateStrings('22', '1111')) / 1221