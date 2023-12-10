
/*
8. Необходимо создать функцию, которая будет принимать строку с буквами на английском языке. Сделать так,
чтобы из функции возвращаласть строка, в которой гласные буквы были заменены на цифры.

...
a -> 1
e -> 2
i -> 3
0 -> 4
u -> 5

    Также необходимо создать функцию, которая принимает зашифрованную строку и возвращает восстановленную.
*/

// function encode(str) {
//     return str.split('').map(char => {
//         switch(char) {
//             case 'a':
//                 return 1
//             case 'e':
//                 return 2
//             case 'i':
//                 return 3
//             case 'o':
//                 return 4
//             default: 
//                 return char
//         }
//     }).join('')
    
// }

// function decode(str) {
//     return str.split('').map(char => {
//         switch(char) {
//             case '1':
//                 return 'a'
//             case '2':
//                 return 'e'
//             case '3':
//                 return 'i'
//             case '4':
//                 return 'o'
//             default: 
//                 return char
//         }
//     }).join('')
// }

// console.log(encode('hello')) // h2ll4
// console.log(decode('h2ll4')) // hello



// function encode(str: string) {
//     const map: Record<string, string> = {
//         'a': '1',
//         'e': '2',
//         'i': '3',
//         'o': '4',
//     }

//     let encoded = '';

//     for (let char of str) {
//         encoded += map[char] ?? char
//     }

//     return encoded
// }

// function decode(str: string) {
//     const map: Record<string, string> = {
//         '1': 'a',
//         '2': 'e',
//         '3': 'i',
//         '4': 'o',
//     }

//     let decoded = ''

//     for (let char of str) {
//         decoded += map[char] ?? char
//     }

//     return decoded
// }

// console.log(encode('hello')) // h2ll4
// console.log(decode('h2ll4')) // hello

function encode(str: string) {
    
    const map: Record<string, string> = {
        'a': '1',
        'e': '2',
        'i': '3',
        'o': '4',
    }

    return str.replace(/[aeio]/g, (char) => map[char] ?? char)

}

function decode(str: string) {
    const map: Record<string, string> = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
    }

    return str.replace(/[1234]/g, (char) => map[char] ?? char)
    
}

console.log(encode('Easy easyy eas breazy')) // h2ll4

console.log(decode('h2ll4')) // hello


