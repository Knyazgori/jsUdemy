"use strict";

// 1 
// Ф-ция с задержкой 
function first() {
    // Do something 
    setTimeout(function() {
        console.log(1);
    }, 500);
}

// Ф-ция без задержки 
function second() {
    console.log(2);
}

first();
second();


// Callback function 1 //////////////////////
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошёл этот урок!');
});


// Callback function 2 //////////////////////
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);
 

