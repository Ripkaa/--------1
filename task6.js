// 5.
function countLettersAndDigits(input) {
    const letters = input.match(/[a-zA-Z]/g) || [];
    const digits = input.match(/\d/g) || [];
    return {
        lettersCount: letters.length,
        digitsCount: digits.length
    };
}

// 4.
function isValidNoSpecialChars(input) {
    const regex = /^[a-zA-Z]{10,}$/;
    return regex.test(input);
}

// 3.
function isOnlyLettersAndDigits(input) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input);
}

// 2.
function isValidJSVariableName(input) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(input);
}

// 1.
function isValidURL(input) {
    const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?$/i;
    return regex.test(input);
}

function startMenu() {
    while (true) {
        let choice = prompt(
            "Выберите задачу:\n" +
                "1. Проверить, является ли строка URL\n" +
                "2. Проверить корректность названия переменной JS\n" +
                "3. Проверить, состоит ли строка только из букв и цифр\n" +
                "4. Проверить, что строка не содержит спецсимволов и цифр, длина >= 10\n" +
                "5. Подсчитать количество букв и цифр в строке\n" +
                "0. Выход\n"
        );

        if (choice === "0") {
            console.log("Выход из программы");
            break;
        }

        switch (choice) {
            case "1": {
                const input = prompt("Введите строку для проверки URL:");
                const result = isValidURL(input);
                console.log(`Результат: ${result ? "Это URL" : "Это не URL"}`);
                break;
            }
            case "2": {
                const input = prompt("Введите строку для проверки имени переменной JS:");
                const result = isValidJSVariableName(input);
                console.log(`Результат: ${result ? "Это корректное имя переменной" : "Это некорректное имя переменной"}`);
                break;
            }
            case "3": {
                const input = prompt("Введите строку для проверки, состоит ли она только из букв и цифр:");
                const result = isOnlyLettersAndDigits(input);
                console.log(`Результат: ${result ? "Строка состоит только из букв и цифр" : "Строка содержит другие символы"}`);
                break;
            }
            case "4": {
                const input = prompt("Введите строку для проверки на отсутствие спецсимволов и цифр, длина >= 10:");
                const result = isValidNoSpecialChars(input);
                console.log(`Результат: ${result ? "Строка соответствует условиям" : "Строка не соответствует условиям"}`);
                break;
            }
            case "5": {
                const input = prompt("Введите строку для подсчета букв и цифр:");
                const result = countLettersAndDigits(input);
                console.log(`Количество букв: ${result.lettersCount}, Количество цифр: ${result.digitsCount}`);
                break;
            }
            default:
                console.log("Некорректный выбор, попробуйте снова.");
        }
    }
}

startMenu();
