/* eslint-disable */
// @ts-nocheck

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6 // 5 - 1 + 2
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15


// Что из себя представляет?



// при вызове sum(1)(2)
// Мы точно знаем, что вызовем sum с аргументом (a === 1) и вызовем функцию add с аргументом (b === 2), которая берет из замыкания a и складывает с b.

function sum(a) {
    let res = 0;
    return function add(...args) {
        res = args[0] + a
        return res
    }
}

// console.log(sum(1)(2));

// при вызове sum(1)(2)(3)
// Что возвращать из функции с аргументом (2), очевидно что функцию, которая возвращает сумму, как понять что вызов был или не было? 
// В этом ли основная проблема?

function sum(a) {
    let res = 0 + a
    return function add(...args) {
        res = args[0] + res
        return function anotherAdd(...args) {
            res = args[0] + res
            return res
        }
     }
}

// console.log(sum(1)(2)(3));

// при вызове sum(5)(-1)(2)
// Определенно нужно хранить в замыкании res сумму
// Кажется я что-то понял, нужно возвращать в функцее сумм
// Как проверить что это последний вызов?

function sum(a) {
    // 5
    let res = a
    // 5
    
    return (b) => {
        if (!b) {
            return res
        } else {
            sum(a + b)
        }
    }   
}


// console.log(sum(5)(-1)(2))



// при вызове  sum(6)(-1)(-2)(-3)
// Определенно нужно хранить в замыкании res сумму
// Кажется я что-то понял, нужно возвращать в функцее сумм
// Как проверить что это последний вызов?


// add замыкает сумму, как вернуть последнее число

// Оказывается я не понял задачу, нужно было не вернуть число, а преобразовать сравнение к такому виду
// sum(1)(2) == 3; // 1 + 2

function sum(a) {
    function add(b) {
        return sum(a + b)
    }

    add[Symbol.toPrimitive] = (hint) => {
        return a
    }

    return add
}


console.log(sum(5)(-1) + 4)


const obj = {
    name: "Max",
    age: 15,
    // [Symbol.toPrimitive](hint) {
    //     console.log(hint)
    // }
}




