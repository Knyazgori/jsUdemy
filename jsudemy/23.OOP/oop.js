'use strict';

let str = "some";
let strObj = new String(str); 

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);



// __proto__ не очень правильный вариант 
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};



const jonh = {
    health: 100,
};

jonh.__proto__ = soldier; // __2x нижних подчёркиваний  >: *@!*@*@!**#

console.log(jonh.armor);
jonh.sayHello();


// 1 Правильный вариант Obj.create/Object.getPrototypeOf/Object.getPrototypeOf

// Obj.create - создаёт объект с протатипом
// Object.getPrototypeOf - получает протатип
// Object.getPrototypeOf - устанавливает протатип 

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};



const jonh = {
    health: 100,
};

jonh.__proto__S = soldier; // __2x нижних подчёркиваний  >: *@!*@*@!**#

Object.setPrototypeOf(jonh, soldier); // аналогично jonh.__proto__ = soldier;
// 1 Jonh это объект , которому ставим прототип 
// 2 Soldier это устоновочный прототип
jonh.sayHello();


// 1.1 Правильный вариант 
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);
jonh.sayHello();


