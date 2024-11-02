const obj1 = { here: { is:
"on", other: "3" }, object: "Y" };

const obj2 = { here: { is:
"on", other: "2" }, object: "Y" };

//функция deepEqual сравнивает два объекта на глубоких уровнях вложенности
const deepEqual = (obj1, obj2) => {
  if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

console.log(deepEqual(obj1, obj2)); //false
