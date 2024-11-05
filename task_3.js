//3.1.1 Создание массива чисел и определение его суммы.

const numbers = [1, 2, 3, 4, 5];

// Находим сумму элементов массива с помощью метода reduce()
const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);

console.log(`Сумма элементов данного массива: ${sum}`); //"Сумма элементов данного массива: 15"

//3.1.2 Создание массива строк и объединение их в одну строку.

const strings = ['надеюсь', 'я', 'успешно', 'пройду', 'срез'];

// Объединяем строки в одну строку с пробелом в качестве разделителя с помощью метода join()
const oneString = strings.join(' ');

console.log(oneString); // "Надеюсь, я успешно пройду срез"

//3.1.3 Поиск максимального и минимального элемента в массиве чисел.

const numbers = [1, 2, 3, 4, 5];

let minimalNumberInArr = numbers[0];
let maximalNumberInArr = numbers[0];

for (let num of numbers) {
  if (num <= minimalNumberInArr) {
    minimalNumberInArr = num;
  }
  if (num >= maximalNumberInArr) {
    maximalNumberInArr = num;
  }
}

console.log(minimalNumberInArr, maximalNumberInArr); // 1 5

//или можно использовать методы Math.min() и Math.max() вместе с spread operator

const minimalNumberInArr = Math.min(...numbers);
const maximalNumberInArr = Math.max(...numbers);

console.log(minimalNumberInArr, maximalNumberInArr); // 1 5


//3.2 Stack (стек): реализация стека с использованием массива.

const stack = []; //создаем стек с использованием массива

// Функция для добавления элемента на верх стека
function push(element) {
    stack.push(element);
}

// Функция для удаления элемента с верхушки стека
function pop() {
    if (isEmpty()) {
        return null; //возвращаем null, если стек пуст
    }
    return stack.pop();
}

// Функция для получения верхнего элемента стека без удаления
function peek() {
    if (isEmpty()) {
        return null; //возвращаем null, если стек пуст
    }
    return stack[stack.length - 1];
}

// Функция для проверки, пуст ли стек
function isEmpty() {
    return stack.length === 0;
}

//3.3.1 Queue (очередь): Реализация очереди с использованием массива.

const queue = []; //создаем очередь с использованием массива

// Функция для добавления элемента в конец очереди
function enqueue(element) {
    queue.push(element);
}

// Функция для удаления элемента из начала очереди
function dequeue() {
    if (isEmpty()) {
        return null; //возвращаем null, если очередь пуста
    }
    return queue.shift(); //удаляем и возвращаем первый элемент
}

// Функция для получения первого элемента очереди без удаления
function peek() {
    if (isEmpty()) {
        return null; /возвращаем null, если очередь пуста
    }
    return queue[0]; //возвращаем первый элемент
}

// Функция для проверки, пуста ли очередь
function isEmpty() {
    return queue.length === 0;
}

//3.3.2 Имитация работы очереди на примере ожидания на кассе.

const queue = []; //создаем очередь для людей в ожидании

// Функция для добавления человека в очередь
function enqueue(person) {
    queue.push(person);
    console.log(`${person} добавлен в очередь.`);
}

// Функция для обслуживания первого человека в очереди
function dequeue() {
    if (isEmpty()) {
        console.log("Очередь пуста.");
        return null; //возвращаем null, если очередь пуста
    }
    const servedPerson = queue.shift(); //удаляем и возвращаем первого человека
    console.log(`${servedPerson} обслужен.`);
    return servedPerson;
}

// Функция для получения первого человека в очереди без удаления
function peek() {
    if (isEmpty()) {
        console.log("Очередь пуста.");
        return null; //возвращаем null, если очередь пуста
    }
    return queue[0]; //возвращаем первого человека
}

// Функция для проверки, пуста ли очередь
function isEmpty() {
    return queue.length === 0;
}
