// let arr = [11, 22, 'asdas', true, [11, 22, 33]];
// console.log(arr[0]);
// arr[0] = 100500;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr[4][0]);
// console.log(arr[4][1]);
// let arrElement = arr[4][2];
// console.log(arrElement);


// let music = [
//     ['asd', 'qwe', 'zxc'],
//     ['13343434', '43432343', 789456123],
//     [true, true, false]
// ]
//
// console.log(music[1][1]);
//
//
// {
//     let a = 'aaaa';
//     var b = 'bbbb';
//     console.log(a);
// }
// console.log(b);
//
// console.log(typeof []);
//
// let user1 = {
//     age: 31,
//     name: 'vasya',
//     status: true,
//     skills: [
//         {plang: 'html', exp: 1},
//         {plang: 'css', exp: 1},
//         {plang: 'js', exp: 2}
//     ],
//     dog: {
//         name: 'bill',
//         age: 1,
//         breed: 'doberman'
//     }
// };
//
// console.log(user1);
// console.log(user1.skills);
// console.log(user1.skills[2]);
// console.log(user1.dog.age);
// console.log(user1.skills[2].exp)
//
// console.log(user1['age']);
// console.log(user1['skills'][0]['plang']);
//
// user1.wife = {
//     name: 'olya',
//     age: 29
// }
//
// console.log(user1)
//
// user1.skills[3] = {plang: 'java', exp: 1};
// console.log(user1);
// user1.skills.push({plang: 'nodejs', exp: 2});
// console.log(user1);
// user1.skills[user1.skills.length]  = {plang: 'mysql', exp: 2, status: true};
// console.log(user1)


// let callToMyFriend = {
//     id: 5464348,
//     to: '+380946665389',
//     duration: 67
// }
//
// console.log(callToMyFriend);


// let xxx = {};
// console.log(typeof xxx);
// console.log(Array.isArray(xxx));


// let a = 0;
// let b = a;
//
// b=100500;
// console.log(a);
// console.log(b);

// let obj1 ={};
// let obj2 = obj1;
// console.log(obj1, obj2);
//
// obj2.id = 100500;
// obj2.name = 'apple';
// console.log(obj2);
// console.log(obj1);
//
//
// let arr1 = [];
// let arr2 = arr1;
// arr2[arr2.length] = 100500;
// arr2[arr2.length] = 200600;
// console.log(arr1, arr2);


// prompt()
//
// if(true){
//     console.log('!!!!!!');
// }


// let color = prompt('Який колір ти бачиш?');
//
// if (color === 'green'){
//     console.log('go');
// }else if (color === 'yellow'){
//     console.log('wait');
// }else if (color === 'red'){
//     console.log('stop')
// }else {
//     console.log('call to service');
// }


// if (confirm('???')){
//
// }else{
//
// }


// let color = prompt('Який колір ти бачиш?');
// switch (color) {
//     case 'green':
//         console.log('go');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('call to service');
//         break;
// }



let color = 'red';
let isRoadClear = 'yes';
if (color === 'green' && isRoadClear === 'yes'){
    console.log('go');
}else if (color === 'yellow' && isRoadClear === 'yes'){
    console.log('wait');
}else if (color === 'red' || isRoadClear === 'yes'){
    console.log('stop')
}else {
    console.log('call to service');
}
