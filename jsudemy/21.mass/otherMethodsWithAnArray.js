"use strict"; 

// 1-практический метод (Превращаем товары в массив)
const str = prompt("", "");
const products = str.split(", ");
console.log(products);

// 2-обратная операция 
const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));

// 3-практический метод (сортировка)
const str = prompt("", "");
const products = str.split(", ");
products.sort(); // Алфавитный порядок 
console.log(products.join('; ')); 

//// НО 

const arr = [2, 13, 26, 8, 10];
arr.sort();
console.log(arr);
// [10, 13, 2, 26, 8] // команда sort воспринимает все как строки,
// поэтому идут сначала еденицы |1|0, |1|3, а потом |2| и т. д.

// как это избежать? 
const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}


// ПСЕВДОМАССИВ 
// это тот же массив , но без методов - сухой массив, который хранит данные по порядку 