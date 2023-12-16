/* eslint-disable */
// @ts-nocheck

// 23. В функцию передается число, напишите функцию по вычислению данного числа Фибоначчи

function fibo(n) {    
    debugger
    if (n <= 1) {
        return n
    } else {
        return fibo(n - 1) + fibo(n - 2)
    }
}

console.log(fibo(3)) // 2
console.log(fibo(7)) // 13

//
// fibonacci(7) = fibonacci(6) + fibonacci(5)
// fibonacci(6) = fibonacci(5) + fibonacci(4)
// fibonacci(5) = fibonacci(4) + fibonacci(3)
// fibonacci(4) = fibonacci(3) + fibonacci(2) // 1 + 0 + 1 + 1 + 0
// fibonacci(3) = fibonacci(2) + fibonacci(1) // 1 + 0 + 1 => 2
// fibonacci(2) = fibonacci(1) + fibonacci(0) // 1 + 0 => 
// fibonacci(1) = 1
// fibonacci(0) = 0
// //

// fibonacci(2) = 1 + 0 = 1
// fibonacci(3) = 1 + 1 = 2
// fibonacci(4) = 2 + 1 = 3
// fibonacci(5) = 3 + 2 = 5
// fibonacci(6) = 5 + 3 = 8
// fibonacci(7) = 8 + 5 = 13










