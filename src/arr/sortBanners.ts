/* eslint-disable */
// @ts-nocheck

// 17. Функция принимает массив баннеров (объектов как в примере) и число, обозначающее количество баннеров,
// которые нужно выбрать из массива. Необходимо реализовать функцию так, чтобы функция выбирала переданное
// количество баннеров, учитывая их вес (чем выше вес, тем выше приоритет выбора).

function selectBanners(banners, count) {
    const sorted = banners.slice();
    sorted.sort((bannerA, bannerB) => bannerB.weight - bannerA.weight)
    
    if (count) {
        return sorted.splice(0, count)
    }

    return sorted
}



const banners = [
    {id: 2, weight: 10},
    {id: 4, weight: 5},
    {id: 8, weight: 15},
    {id: 22, weight: 18},
    {id: 41, weight: 41},
    {id: 53, weight: 1},
    {id: 69, weight: 9},
]

console.log(selectBanners(banners, 3)); 
console.log(selectBanners(banners, 4)); 