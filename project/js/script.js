/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
*//*
'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

function rememberMyFilms(){
    for (let i=0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b!= null && a!="" && b!=""&& a.length<50){
              personalMovieDB.movies[a] = b;
                 console.log('done!');
             } else {
                  console.log('error');
                     i--;
         } 
    }
}
rememberMyFilms();

    function detectPersonalLevel(){

        if (personalMovieDB.count<10){
             console.log('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
                console.log('Вы классический зритель');
        }else if(personalMovieDB.count>=30){
                 console.log ("Вы киноман");
        } else {console.log('Произошла ошибка');
    }
}

detectPersonalLevel();
   

    function showMyDB(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    }
      showMyDB(personalMovieDB.privat);


      function writeYourGenres(){
        for (let i=1; i<=3; i++){
            const genre = prompt (`"Ваш любимый жанр под номером ${i}"`);
            personalMovieDB.genres[i-1]= genre;
        }
      }
      writeYourGenres();*/









































































/*
      let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let num=5;
while (num<=10){
    console.log(num);
    num++;
}      

for(i=10; i<20; i++){
    if(i===13){
        break;
    }
    console.log(i);
}

for (i=2; i<=16; i++){
    if(i%2===0){
        continue;
    }else{
        console.log(i);
        i++;
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let 


const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;

    
for(i=10; i<20; i++){
    if(i===13){
        break;
    }
    console.log(i);
}


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i=0; i<arr.length; i++){
    result[i]=arr[i];
}
console.log(result)



const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);




const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}
console.log (result)

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result) 


function sayHello(name) {
return `Привет, ${name}!`;
}
sayHello('Alex');

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');



function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);


function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

/*  Числа фибаначчи   

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second,
        first = second,
        second = third;
    }

    return result;
}

fib(5);*/