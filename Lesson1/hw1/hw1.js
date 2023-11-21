// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';

let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;

let bool1 = true;
let bool2 = false;


console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(bool1);
console.log(bool2);



// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Nadiia';
let middleName = 'Stepanivna';
let lastName = 'Feniuk';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    let b = '100';
    let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);



// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let myName = prompt('Як Вас звати?','');
console.log('Моє імя ' + myName);

let myMiddleName = prompt('Як Вас По-Батькові?','');
console.log('Моє по-Батькові ' + myMiddleName);

let myAge = prompt('Скільки Вам років?','');
console.log('Мій вік - ' + myAge);