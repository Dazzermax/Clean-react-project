/* eslint-disable */
// @ts-nocheck

import { Children } from "react";

// 11. В функцию передается структура, в которой описан человек и его дети. Необходимо реализовать функцию так, чтобы
// она возвращала сумму человека и всех его детей.

const user = {
    name: 'Петр',
    age: 49,
    children: [
        {
            name: 'Нина',
            age: 25,
            children: [
                {
                    name: 'Андрей',
                    age: 3,
                },
                {
                    name: 'Олег',
                    age: 1,
                }
            ]
        },
        {
            name: 'Александр',
            age: 22,

        }
    ]
}

// function sumAge(user) {
//     const ages = []
//     ages.push(user.age)
//     const key = 'children'

//     if (key in user) {
//         user[key].forEach(element => {
//             ages.push(element.age)
//             if (key in element) {
//                 element[key].forEach((el) => {
//                     ages.push(el.age) 
//                 })
//             }
//         });
//     }

//     return ages.reduce((res, curr) => res + curr)
    
// }

function sumAge(user) {
    let totalAge = user.age

    if (user.children && user.children.length > 0) {
        for (let person of user.children) {
            totalAge += sumAge(person)
        }
    }

    return totalAge
}


console.log(sumAge(user)) 


