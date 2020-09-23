"use strict";

// 1 
const str = "text";
const arr = [1, 2, 4]

console.log(str.length); // проверка на кол-во символов
console.log(arr.length); // проверка на кол-во элементов внутри массива 
console.log(str[3]); // выводит букву по номером '3' 

//console.dir(...); // проверка св-в  


// 2 метод изменения регистра 
const tex = "text";

console.log(tex.toUpperCase()); // заглавные буквы
console.log(tex);

console.log(tex.toLowerCase()); // нижний регистр 
console.log(tex);


// 3 поиск подстроки 
const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

// консоль выводит 5, т. к. fruit начинается с 5-ой позиции
// S o m e   f r u i t
// 0 1 2 3 4 5 6 7 8 9


// 4 изменения строк
const logg = "Hello world";
console.log(logg.slice(6, 11)); // 6 - начало слова 'world' 11 - конец
console.log(logg.substring(6, 11)); // аналогично ^


const loggg = "Hello world ";
console.log(loggg.slice(-6, -1)); // -6 - начало слова 'world' -1 - конец


console.log(logg.substr(6, 5)); // 6 - откуда вырезать символы 5 - сколько вырезать 


// 5 числа 
const num = 12.2;
console.log(Math.round(num)); // округление 

const test = '12.2px';
console.log(parseInt(test)); // превращает числовой тип данных (обрезает до целого числа)
console.log(parseFloat(test)); // превращает в числовой тип данных с плавующей точкой 
