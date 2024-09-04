//1 
//  let n1 = prompt('number 1');
//  let n2 = prompt('number 2');
// alert(n1*n2);

//2
// let name = prompt('Введите имя');
// let surname = prompt('Введите фамилию');
// let age = prompt('Введите возраст');
// alert(`Привет ${name} ${surname} с возрастом ${age} лет`);

//3
// let gender = prompt('Введите ваш пол M / F');
// function defineGender(g) {
//   switch(g){
//     case 'M':
//       alert('Ваш пол мужской');
//       break;
//     case 'F':
//       alert('Ваш пол женский');
//       break;
//     default :
//     alert('Ваш пол не определен');
//     break;
//   }
// }
// defineGender(gender);

//4
// let number = prompt('Введите число от 1 до 7');
// function getDayByNumber(n) {
//   switch(n) {
//     case '1' :
//       alert('Понедельник');
//       break;
//     case '2' :
//       alert('Вторник');
//       break;
//     case '3' :
//       alert('Среда');
//       break;
//     case '4' :
//       alert('Четверг');
//       break;
//     case '5' :
//       alert('Пятница');
//       break;
//     case '6' :
//       alert('Суббота');
//       break;
//     case '7' :
//       alert('Воскресенье');
//       break;
//   }
// }
// getDayByNumber(number);

//5
// function getAgeStatus(age) {
//   let s;
//   if( age < 18) {
//         s = 'ребенок';
//       }
//       else if(age > 17 && age < 31){
//         s = 'молодой';
//       }
//       else if( age > 29 && age < 56){
//         s = 'зрелый'
//       }
//       else {
//         s = 'старый'
//       }
//       return s;
// }
// for(let i = 1; i<=100; i++){
//   document.write(i +' ' + getAgeStatus(i) + '<br>');
// }

//6 
// let n = prompt('Enter your name');
// let a = prompt('Enter your age');
// function message(name, age){
//   alert(`${name} имеет возраст ${age} и он ${getAgeStatus(age)}`);
// }
// message(n, a);

//7
// function HiBtn () {
//   alert("Привет Мир!");
// }

//8
// let inp = document.querySelector('input');
// function fillInput (input) {
//   input.value = "test@email.ru";
// }

//9
// function message(input){
//   let text = inp.value;
//   text ? alert('Вы ввели ' + text) : alert('Вы ничего не ввели в поле');
// }

//10
// let blockBtn = document.querySelector('.block');
// let unblockBtn = document.querySelector('.unblock');

// function block(input){
//   input.setAttribute("disabled", '')
// }
// function unblock(input){
//   input.removeAttribute("disabled", '')
// }

//11
let square = document.querySelector('.square');
// let btn = document.querySelector('button');

// function Hide (element){
//   element.classList.toggle('hide');
//  btn.textContent = 'Show';
// }

//12
function changeColor(el) {
  el.style.background = 'green';
}
function backColor(el) {
  el.style.background = 'red';
}