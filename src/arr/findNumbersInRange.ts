// 5. Написать функцию, которая принимает три числа, 'a, b, c'. Функция должна вернуть массив чисел, которые
// в промежутке между числами 'a' включительно и 'b' включительно делящиеся без остатка на 'c'


function findNumbersInRange(min: number, max: number, divider: number) {
    const res = []

    if (divider === 0) {
        console.error('Делить на ноль нельзя')
    }

    for (let num = min; num <= max; num++) {
        if (num % divider === 0) {
            res.push(num)
        }
    }

    return res
}

