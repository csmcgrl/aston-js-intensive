// Примеры создания примитивных значений

//String
let helloWorld = 'Hello, World!'; //одинарные кавычки
let someString = "...some string"; //двойные кавычки

//Number
const myAge = 28; //целое число
let currentTemperature = 36.6; //значение с плавающей точкой

//Boolean
const student = { age: 19 };
const isAdult = student.age >= 18; //true

const isStudent = true;

//Null
let nullValue1 = null;

//Undefined
let undefinedValue2; //переменная, которая была объявлена, но не инициализирована
console.log(undefinedValue2); //undefined

//Symbol
let sym1 = Symbol('description'); //cоздание символа с помощью функции Symbol()
let sym2 = Symbol(); //cоздание уникального символа без описания

//BigInt
let bigInt1 = BigInt(123456789012345678901234567890); //вызов встроеннjй̆ функции BigInt()
let bigInt2 = 123456789012345678901234567890n; // добавление символа n в конец числового литерала
