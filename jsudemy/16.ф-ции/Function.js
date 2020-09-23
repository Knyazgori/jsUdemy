"use strict";

// ф-ции это действия в js
// ф-ции упрощают работу


// FUNCTION DECLARATION 
// 1
// showFirstMessage - первое слово глагол
function showFirstMessage() {
    console.log('Hello');
}

showFirstMessage();


// 2
// даём данные ф-ции 
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Hello');


// 3
function showFirstMessage(text) {
    console.log(text);
    let num = 20; // локальная переменна , которая существует только внутри ф-ции
}

showFirstMessage('Hello');
///console.log(num); err т. к. код внутри ф-ции


// 4 
let num = 20; // глобальная переменная 

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // локальная переменна , которая существует только внутри ф-ции
}

showFirstMessage('Hello');
console.log(num); 

// результат 20 так как переменная задана глобально 


// 5 
let num = 20; 

function showFirstMessage(text) {
    console.log(text);
    let num = 10; 
    console.log(num);
}

showFirstMessage('Hello');
console.log(num); 

// результат 10
//           20 


// 6 блок return 
function calc(a, b) {
    return (a + b); // возращает значени 
  //console.log('Hello') err после return нельзя писать код   
}

console.log(calc(4, 3));
console.log(calc(10, 3));
console.log(calc(42, 340));
console.log(calc(442, 32));


// 7 
function ret() {
    let num = 50;
    // code 
    // code 
    // code
    return num; // всегда возращает заданое значение 
}


// 8 
function ret() {
    let num = 50;
    // code 
    // code 
    // code
    return num; 
}

const anotherNum = ret();
console.log(anotherNum); // выводим код внутри ф-ции - наружу 


// FUNCTION EXPRESSION 
// 1
const logger = function() {
    console.log('Hello');
};

logger();

// главная особенность этого типа ф-ций - вызывается только тогда, 
// когда до нее доходит код 


// 2 главная ожибка
logger();


const logger = function() {
    console.log('Hello');
};


// СТРЕЛОЧНЫЕ Ф-ЦИИ 
// 1
const calcu = (a, b) => a + b; // сокр. вариант 

const calcul = (a, b) => { return a + b}; // классика
   




