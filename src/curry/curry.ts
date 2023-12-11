/* eslint-disable */
// @ts-nocheck

// curry func

// const _sum3 = (x, y, z) => x + y + z;

// const _sum4 = (p, q, r, s) => p + q + r + s;

// const sum3 = curry(_sum3);
// const sum4 = curry(_sum4);

// console.log(sum3(1)(3)(2)); // 6
// console.log(sum4(1)(3)(2)(4)); // 10




// что мы хотим сделать?
// Есть функция foo, у которой есть три аргумента
// a, b , c
// хотим сделать такую функцию curry, которая бы
// вернуда фунцию _foo чтобы ее можно было бы вызывать как _foo(5)(4)(3)

// Можем получить количество аргументов функции

// function curry(fn) {
//     const curryLength = fn.length;

//     function curried(length, args) {
//         return function inner(param) {
//             if (length <= 1) {
//                 return fn(...args, param)
//             } else {
//                 return curried(n - 1, )
//             }
//         }
//      }

//     return curried(curryLength, [])
// }

function foo(key1: string, key2: string) {
    return this[key1] + this[key2]
 }
 
 function curry(fn) {
     const originalLength = fn.length;
 
     return function curried(...args) {
 
         if (args.length >= originalLength) {
             return fn.apply(this, args)
         }
 
         return (...more) => {
             return curried.apply(this, [...args, ...more]);
         }
     }
 }
 
 
 
 const curriedFoo = curry(foo);
 
 const obj = {
     a: 1,
     b: 2,
     sum: curriedFoo,
 }
 
 console.log(obj.sum('a')('b'))
 
 
 
 