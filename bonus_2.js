//функция, которая разворачивает строку в обратном направлении при помощи методов массивов
const reverseStr = (str) => {
    return str.split("").reverse().join("");
}

const string = "строка";
const reversedString = reverseStr(string);
console.log(reversedString); //'акортс'
