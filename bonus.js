const firstSum = (arr, total) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

console.log(firstSum(arr, total)); //[4, 9]

//в этом алгоритме использована алгоритмическая сложность O(n²), поскольку у нас в функции вложенные циклы (цикл внутри цикла)
