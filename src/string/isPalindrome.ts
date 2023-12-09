/* eslint-disable */
// @ts-nocheck

// 6. Написать функию, в которую будет передаваться строка, функция должна вернуть булев тип, который описывает,
// является ли переданнная в функцию строка палиндромом (читается с обеих сторон одинаково)


// function isPalindrome(str) {

//     if (str.length < 2) {
//         return false
//     }

//     if (str.length === 2 && str[0] === [str[1]]) {
//         return true
//     }

//     const palindromeCharMiddle = Math.floor(str.length / 2);
//     const strChars = str.toLowerCase().split('');

//     const leftSide = '';
//     const rightSide = '';

//     for (let i = 0; i < palindromeCharMiddle; i++) {
//         leftSide += strChars[i]
//         rightSide+= strChars[strChars.length - (i + 1)]
//     }

//    return leftSide === rightSide

// }


function isPalindrome(str) {
    return str === str.split('').reverse().join('')
}


console.log(isPalindrome('топот'));
console.log(isPalindrome('репер'));
console.log(isPalindrome('книжка'))

