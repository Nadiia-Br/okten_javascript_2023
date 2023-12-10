// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [123, true, 'qwerty', 15, 555, false, 'okten', 'js', true, 2023];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: '«Колонія. Нові темні віки»',
//     pageCount: 904,
//     genre: 'Наукова фантастика'
// }
// let book2 = {
//     title: '«Тривожні люди»',
//     pageCount: 360,
//     genre: 'Роман'
// }
// let book3 = {
//     title: '«Точка обману»',
//     pageCount: 528,
//     genre: 'Науковий трилер'
// }
// console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book1 = {
//     title: '«Колонія. Нові темні віки»',
//     pageCount: 904,
//     genre: 'Наукова фантастика',
//     author: [{name: 'Макс Кідрук', age: 39}]
// }
// let book2 = {
//     title: '«Тривожні люди»',
//     pageCount: 360,
//     genre: 'Роман',
//     author: [{name: 'Фредрік Бакман', age: 42}]
// }
// let book3 = {
//     title: '«Точка обману»',
//     pageCount: 528,
//     genre: 'Науковий трилер',
//     author: [{name: 'Ден Браун', age: 59}]
// }
// console.log(book1, book2, book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'Nadiia', username: 'bernard', password: 'okten'},
//     {name: 'Nadiia2', username: 'bernard2', password: 'okten2'},
//     {name: 'Nadiia3', username: 'bernard3', password: 'okten3'},
//     {name: 'Nadiia4', username: 'bernard4', password: 'okten4'},
//     {name: 'Nadiia5', username: 'bernard5', password: 'okten5'},
//     {name: 'Nadiia6', username: 'bernard6', password: 'okten6'},
//     {name: 'Nadiia7', username: 'bernard7', password: 'okten7'},
//     {name: 'Nadiia8', username: 'bernard8', password: 'okten8'},
//     {name: 'Nadiia9', username: 'bernard9', password: 'okten9'},
//     {name: 'Nadiia10', username: 'bernard10', password: 'okten10'}
// ];
// console.log(`Пароль: ${users[0].password}`);
// console.log(`Пароль: ${users[1].password}`);
// console.log(`Пароль: ${users[2].password}`);
// console.log(`Пароль: ${users[3].password}`);
// console.log(`Пароль: ${users[4].password}`);
// console.log(`Пароль: ${users[5].password}`);
// console.log(`Пароль: ${users[6].password}`);
// console.log(`Пароль: ${users[7].password}`);
// console.log(`Пароль: ${users[8].password}`);
// console.log(`Пароль: ${users[9].password}`);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('Введіть число');
// if (x !== 0){
//     console.log('Вірно', x);
// }else {
//     console.log('Невірно', x);
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 31;
// if(time>0 && time<15){
//     console.log('I');
// }else if(time>=15 && time<30){
//     console.log('II');
// }else if(time>=30 && time<45){
//     console.log('III');
// }else if(time>=45 && time<60){
//     console.log('IV');
// }else{
//     console.log('error');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 20;
// if(day >= 1 && day < 10){
//     console.log(1);
// }else if(day >= 10 && day < 20){
//     console.log(2);
// }else if(day >= 20 && day <=31){
//     console.log(3);
// }else {
//     console.log('error');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let week = +prompt('Введіть порядковий номер дня тижня');
// switch (week) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//
//     default:
//         console.log('Введіть число від 1 до 7!!!');
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

// let num1 = 38;
// let num2 = 43 ;
//
// if (num1 === num2){
//     console.log('Числа рівні');
// }else if (num1 > num2){
//     console.log('Максимальне число: ' + num1)
// }else {
//     console.log('Максимальне число: ' + num2);
// }
    


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = 'test';
// x = x  || 'default';
// console.log(x);


// let x = 5 || 'default';
// console.log(x);

// let x = undefined;
// if(!x){
//     x = 'default';
//     console.log(x);
// }else{
//     console.log(x);
// }



//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration >= 5 ){console.log('Супер!');}else {console.log('Курс менше 5 місяців.');};
if(coursesAndDurationArray[1].monthDuration >= 5 ){console.log('Супер!');}else {console.log('Курс менше 5 місяців.');};
if(coursesAndDurationArray[2].monthDuration >= 5 ){console.log('Супер!');}else {console.log('Курс менше 5 місяців.');};
if(coursesAndDurationArray[3].monthDuration >= 5 ){console.log('Супер!');}else {console.log('Курс менше 5 місяців.');};
if(coursesAndDurationArray[4].monthDuration >= 5 ){console.log('Супер!');}else {console.log('Курс менше 5 місяців.');};
if(coursesAndDurationArray[5].monthDuration >= 5 ){console.log('Супер!');}else {console.log('Курс менше 5 місяців.');};