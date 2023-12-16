/* eslint-disable */
// @ts-nocheck

// 20. В функцию передается массив объектов как в примере. Необходимо вернуть из функции отсортированный массив
// в возрастающем порядке по значению свойств val объектов массива, при этом в возвращаемом значении не должны
// присутствовать объекты, которые имеют отрицательные значения val.



function sort(arr) {
    const onlyPositiveValues = arr.filter((item) => item.val >= 0);

    return onlyPositiveValues.sort((a, b) => a.val - b.val);
}

const arr = [
    {id: 13, val: 5},
    {id: 5, val: -17},
    {id: 77, val: 98},
    {id: 24, val: 2},
]

console.log(sort(arr))


