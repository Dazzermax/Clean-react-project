/* eslint-disable */
// @ts-nocheck

// 21. В функцию передается строка в которой находятся круглые скобки. Необходимо реализовать функцию так,
// чтобы она  возвращала правду, если скобки парные (открывающие и закрывающие), а так же порядок открывающих
// и закрывающих скобок верно соблюден.


function validParentheses(str) {
    const stack = [];

    for (let char of str) {
        if (char === '(') {
            stack.push(char)
        } else if (char === ')' && stack.at(-1) === '(') {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0;
}

console.log(validParentheses('()')) // true
console.log(validParentheses('()()()')) // true
console.log(validParentheses('()()')) // true
console.log(validParentheses('())')) // false
console.log(validParentheses('())(')) // false

