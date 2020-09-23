"use strict";

// 1 Создаём obj 
///////////////////////////////////////////////////////////////////////
// const options = { 
//     name: 'test',
//     width: 1024,
//     height:1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

//console.log(options);


//1.1
//console.log(options.name); // Выводит определенный элемент объекта
//1.2
//delete options.name; // Удаления элемента из объекта

///////////////////////////////////////////////////////////////////////
const options = { 
    name: 'test',
    width: 1024,
    height: 1024, 
    colors: {
        border: 'black',
        bg: 'red'
    }

};

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// Перебираем св-ва объекта
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${key} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        
    }
}

  


// 2 obj keys
// console.log(Object.keys(options));

// теперь определяем кол-во элементов 

// console.log(Object.keys(options).length);


// Создаём методы внутри объекта 
// const options = {
//     name: 'test',
//     width: 1024,
//     height:1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();


// Объекты это как шкафы с коробками в которых храняться элементы 