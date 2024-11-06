# Какие бывают алгоритмы сортировок ? 
**1. Встроенный метод sort()**  
Метод sort() является основным инструментом для сортировки массивов в JavaScript. Он изменяет исходный массив и возвращает отсортированный массив. По умолчанию сортировка происходит в лексикографическом порядке, но можно использовать функцию сравнения для настройки порядка сортировки.
```
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // Сортировка по возрастанию
console.log(numbers); // [1, 2, 3, 4, 5]
```
**2. Быстрая сортировка (Quick Sort)**  
Быстрая сортировка — это один из самых быстрых алгоритмов сортировки с средним временем выполнения *O(n log n)*. Она работает по принципу "разделяй и властвуй", выбирая опорный элемент и разбивая массив на подмассивы.
```
const quickSort = (arr) => {
    if (arr.length < 2) return arr; // Условие выхода из рекурсии
    const pivot = arr[0]; // Опорный элемент
    const left = arr.slice(1).filter(x => x < pivot);
    const right = arr.slice(1).filter(x => x >= pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
};

const numbers = [5, 2, 8, 1, 4];
console.log(quickSort(numbers)); // [1, 2, 4, 5, 8]
```
**3. Сортировка слиянием (Merge Sort)**
Сортировка слиянием также использует подход "разделяй и властвуй". Она делит массив на две половины, рекурсивно сортирует каждую половину и затем объединяет их.
```
const mergeSort = (arr) => {
    if (arr.length < 2) return arr; // Условие выхода из рекурсии
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
};

const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
};

const numbers = [5, 2, 8, 1, 4];
console.log(mergeSort(numbers)); // [1, 2, 4, 5, 8]
```
**4. Сортировка выбором (Selection Sort)**
Этот алгоритм работает путем многократного нахождения минимального элемента из неотсортированной части массива и перемещения его в начало.
````
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Обмен местами
    }
    return arr;
};

const numbers = [5, 2, 8, 1, 4];
console.log(selectionSort(numbers)); // [1, 2, 4, 5, 8]
```
