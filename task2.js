// 1. Вывести все целые числа от 1 до 100
function printNumbers1To100() {
    console.log("Задача 1");
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

// 2. Вывести все целые числа от -100 до 0
function printNumbersMinus100To0() {
    console.log("Задача 2");
    for (let i = -100; i <= 0; i++) {
        console.log(i);
    }
}

// 3. Вывести все четные числа от 1 до 100
function printEvenNumbers1To100() {
    console.log("Задача 3");
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

// 4. Найти все четные числа из промежутка, указанного пользователем
function printEvenNumbersInRange() {
    console.log("Задача 4");
    let start = parseInt(prompt("Введите начало промежутка:"));
    let end = parseInt(prompt("Введите конец промежутка:"));

    while (isNaN(start) || isNaN(end) || start >= end) {
        console.log("Введены некорректные значения. Повторите попытку.");
        start = parseInt(prompt("Введите начало промежутка:"));
        end = parseInt(prompt("Введите конец промежутка:"));
    }

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// 5. Программа-тест проверки таблицы умножения
function multiplicationTest() {
    console.log("Задача 5");
    let continueGame = true;

    while (continueGame) {
        const operand1 = Math.floor(Math.random() * 9) + 2;
        const operand2 = Math.floor(Math.random() * 9) + 2;

        const correctAnswer = operand1 * operand2;
        const userAnswer = parseInt(prompt(`Сколько будет ${operand1} * ${operand2}?`));

        if (userAnswer === correctAnswer) {
            console.log("Правильно!");
        } else {
            console.log(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }

        const userChoice = prompt("Хотите продолжить? (y для продолжения, любой другой символ для выхода):");
        continueGame = (userChoice.toLowerCase() === 'y');
    }
}

printNumbers1To100();
printNumbersMinus100To0();
printEvenNumbers1To100();
printEvenNumbersInRange();
multiplicationTest();
