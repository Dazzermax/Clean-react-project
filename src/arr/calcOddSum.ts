// 2. В функцию передается массив, функция должна вернуть сумму всех нечетных чисел больше нуля

function calculate(arr: number[]) {
    const sum = arr.reduce((res, curr) => {
        if (curr > 0 && curr % 2 !== 0) {
            res+=curr
        }

        return res

    }, 0)

    return sum
}

console.log(calculate([5, 0, -5, 20, 88, 17, -32]))  // 22