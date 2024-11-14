// 1. Сумма элементов, которые больше 0 и меньше 10
function sumPositiveLessThanTen(arr) {
    return arr.filter(num => num > 0 && num < 10).reduce((acc, num) => acc + num, 0);
}

// 2. Проверка, что все элементы массива четные
function allEven(arr) {
    return arr.every(num => num % 2 === 0);
}

// 3. Массив из элементов, кратных пяти
function multiplesOfFive(arr) {
    return arr.filter(num => num % 5 === 0);
}

// 4. Среднее арифметическое массива (округлено до десятых)
function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return +(sum / arr.length).toFixed(1);
}

// 5. Фильтрация строк, которые начинаются с "http://"
function filterHttp(arr) {
    return arr.filter(str => str.startsWith("http://"));
}

// 6.1. Разделение ключей и значений объекта на два массива
function separateKeysAndValues(data) {
    const keys = [];
    const values = [];
    
    data.forEach(obj => {
        Object.keys(obj).forEach(key => {
            keys.push(parseInt(key));
            values.push(obj[key]);
        });
    });

    return { keys, values };
}

// 6.2. Сумма всех элементов структуры данных
function sumOfStructure(data) {
    return data.reduce((acc, obj) => {
        return acc + Object.values(obj).reduce((sum, num) => sum + num, 0);
    }, 0);
}

function promptNumberArray(message) {
    return prompt(message)
        .split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));
}

function promptStringArray(message) {
    return prompt(message).split(',').map(str => str.trim());
}

function startProgram() {
    const array1 = promptNumberArray("Введите числа через запятую для задачи 1 (например, 1, 5, 12, 7, -3):");
    console.log("Задача 1: Сумма элементов > 0 и < 10:", sumPositiveLessThanTen(array1));

    const array2 = promptNumberArray("Введите числа через запятую для задачи 2 (например, 2, 4, 6, 8):");
    console.log("Задача 2: Все элементы четные:", allEven(array2));

    const array3 = promptNumberArray("Введите числа через запятую для задачи 3 (например, 1, 2, 5, 12, 15, 21):");
    console.log("Задача 3: Кратные пяти:", multiplesOfFive(array3));

    const array4 = promptNumberArray("Введите числа через запятую для задачи 4 (например, 1, 2, 3, 4, 5):");
    console.log("Задача 4: Среднее арифметическое:", average(array4));

    const array5 = promptStringArray("Введите строки через запятую для задачи 5 (например, http://example.com, https://example.com):");
    console.log("Задача 5: Строки, начинающиеся с 'http://':", filterHttp(array5));

    const data = [
        { 1: 11, 2: 12, 3: 13 },
        { 1: 21, 2: 22, 3: 23 },
        { 1: 24, 2: 25, 3: 26 }
    ];
    console.log("Задача 6.1: Ключи и значения из структуры:", separateKeysAndValues(data));
    console.log("Задача 6.2: Сумма всех элементов структуры:", sumOfStructure(data));
}

startProgram();
