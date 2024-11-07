//создание объекта Person литеральным способом
const Person = {
    name: 'Daria',
    age: 28,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

//создание объекта Person c использованием функции-конструктора
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}

PersonConstructor.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

//создание объекта Person c использованием класса
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

//Создание объекта Person2
//прототипное наследование
const Person2 = Object.create(Person);
Person2.logInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

Person2.name = 'Ivan';
Person2.age = 29;
Person2.greet(); // Hello, my name is Ivan
Person2.logInfo(); // Name: Ivan, Age: 29

//наследование через класс
class Person2 extends PersonClass {
    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const personInstance = new Person2('Elena', 60);
personInstance.greet(); // Hello, my name is Elena
personInstance.logInfo(); // Name: Elena, Age: 60

//класс PersonThree с геттерами и сеттерами
class PersonThree extends Person {
    constructor(name, age) {
        super(name, age); //вызов конструктора родительского класса
    }

    get name() {
        return this.name; // Используем _name для хранения значения
    }

    set name(value) {       
            this.name = value;
        } 
    }

// Класс-наследник
class Descendant extends PersonThree {
    constructor(name, age) {
        super(name, age); //вызов конструктора родительского класса
    }
}
