"use strict";

// 1
let a = 5, 
    b = a;

b =  b + 5;

console.log(b);
console.log(a);


// 2 создаём копию объекта и изменяем её 
const obj = { 
    a: 5,
    b: 1
};

const copy = obj; // передача ссылки 

copy.a = 10;

console.log(copy);
console.log(obj);
// результат: 
//{ a: 10, b: 1 }
//{ a: 10, b: 1 }

// 2.1 создаём копии другим путём 

function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const num = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNum = copy(num);

newNum.a = 10;
newNum.c.x = 10;

console.log(newNum);
console.log(num);


// 2.2 соединяем объекты 

const add = {
    d: 17, 
    e: 20,
};

console.log(Object.assign(num, add)); 
// Сначала вписываем объект, в который помещаем, затем который помещаем
// Результат: { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 } 


// 2.3 Ещё один способ клонирования 

const clone = Object.assign({}, add); 

clone.d = 20;

console.log(add);
console.log(clone);

// 3 метод - клон массива 
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abcd';
console.log(newArray);
console.log(oldArray);


// 4 Оператор spread (оператор разворота)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


// 4.1
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

const numbers = [2, 5, 7];

log(...numbers);
// результат:
// 2
// 5
// 7



// 5 
const array = ["a", "b"];

const newAarray = [...array];
newAarray[1] = 'c';

console.log(array);
console.log(newAarray);


// 5.1 
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(q);
console.log(newObj);
