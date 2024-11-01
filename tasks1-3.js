// Задание 1. Создание объекта counter всевозможными способами

//литеральная форма
const counter = {};

//с помощью ключевого слова new через функцию-конструктор
const counter = new Counter();
function Counter() {
    this.count = 0;
}

//с помощью ключевого слова new через класс
const counter = new Counter(0, 1);
class Counter {
  constructor(begin, acc) {
    this.begin = begin;
    this.acc = acc;
  }
}

//с помощью встроенных методов Object
const counter = Object.create({});
const counter = Object.assign({}, { count: 0 });

// Задание 2. Копирование объекта counter всевозможными способами

//поверхностное копирование с помощью Object.assign() (не подойдет, если нужна глубокая копия объекта)
const counterCopy = Object.assign({}, counter);

//поверхностное копирование с использованием оператора расширения (spread operator) (не подойдет, если нужна глубокая копия объекта)
const counterCopy = { ...counter };

//с помощью JSON.parse() и JSON.stringify() (не подойдет, если данные несериализуемы (undefined, функция, symbol))
const counterCopy = JSON.parse(JSON.stringify(counter));

//с помощью библиотеки Lodash
import cloneDeep from 'lodash.clonedeep'
const counterCopy = cloneDeep(counter);

//с помощью метода structuredClone()
const counterCopy = structuredClone(counter);

//с помощью паттерна проектирования "Прототип" и метода create
const counter = {
    count: 0,
    getCount() {
        return this.count;
    }
};

const counterCopy = Object.create(counter);

//с помощью создания своей собственной функции для глубокого копирования
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; //если obj не объект или null, возвращаем его
    }
    let copy = Array.isArray(obj) ? [] : {}; //создаем новый массив или объект
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { //проверяем, что свойство принадлежит объекту
            copy[key] = deepCopy(obj[key]); //рекурсивно копируем свойства
        }
    }
    return copy; //возвращаем новый объект или массив
}

// Задание 3. Создание функции makeCounter всеми описанными и возможными способами

//объявляемая функция (Function Declaration)
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

//функциональное выражение (Function Expression)
const makeCounter = function() {
    let count = 0;
    return function() {
        return count++;
    };
};

//именованное функциональное выражение (Named Function Expression)
const makeCounter = function counter() {
    let count = 0;
    return function() {
        return count++;
    };
};

//стрелочная функция (Arrow Function)
const makeCounter = () => {
    let count = 0;
    return () => count++;
};

//генераторная функция (Generator Function)
function* makeCounter() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

//функция-конструктор (Constructor Function)
function MakeCounter(initialValue = 0) {
    this.count = initialValue;
    this.increment = () => this.count++;
}
