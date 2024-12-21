function startMenu() {
    while (true) {
        let choice = prompt(
            "Выберите задачу:\n" +
            "1. Проверка ответа на случайную задачу\n" +
            "2. Символы на четных позициях строки\n" +
            "3. Произведение цифр строки\n" +
            "4. Перевернутое число\n" +
            "5. Удаление символа в строке\n" +
            "0. Выход\n" +
            "Введите номер задачи:"
        );

        if (choice === "0") {
            console.log("Выход из программы");
            break;
        }

        switch (choice) {
            case "1":
                randomTaskCheck();
                break;
            case "2":
                evenPositionChars();
                break;
            case "3":
                productOfDigits();
                break;
            case "4":
                reverseNumberTask();
                break;
            case "5":
                removeCharacterTask();
                break;
            default:
                console.log("Неверный выбор. Попробуйте снова.");
        }
    }
}

// 1: Проверка ответа на случайную задачу
function randomTaskCheck() {
    let messages = {
        'error': "Вы допустили ошибку",
        'success': "Все прошло успешно",
        'check': function (userAnswer, correctAnswer) {
            if (Number(userAnswer) === correctAnswer) {
                console.log(this.success);
            } else {
                console.log(this.error);
            }
        }
    };

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let correctAnswer = num1 * num2;

    let userAnswer = prompt(`Вычислите: ${num1} * ${num2}`);
    messages.check(userAnswer, correctAnswer);
}

// 2: Символы на четных позициях строки
function evenPositionChars() {
    let inputString = prompt("Введите строку:");
    let evenChars = "";
    for (let i = 1; i < inputString.length; i += 2) {
        evenChars += inputString[i];
    }
    console.log("Символы на четных позициях:", evenChars);
}

// 3: Произведение цифр строки
function productOfDigits() {
    let digitString = prompt("Введите строку, состоящую только из цифр:");
    if (!/^\d+$/.test(digitString)) {
        console.log("Ошибка: строка должна содержать только цифры!");
        return;
    }
    let product = 1;
    for (let char of digitString) {
        product *= Number(char);
    }
    console.log("Произведение цифр:", product);
}

// 4: Перевернутое число
function reverseNumberTask() {
    function reverseNumber(num) {
        let reversed = "";
        let strNum = String(num);
        for (let i = strNum.length - 1; i >= 0; i--) {
            reversed += strNum[i];
        }
        return Number(reversed);
    }

    let number = prompt("Введите число для переворота:");
    if (isNaN(Number(number))) {
        console.log("Ошибка: введите корректное число!");
        return;
    }
    console.log("Перевернутое число:", reverseNumber(number));
}

// 5: Удаление символа в строке
function removeCharacterTask() {
    function removeCharAt(str, position) {
        return str.substring(0, position) + str.substring(position + 1);
    }

    let userString = prompt("Введите строку:");
    let position = Number(prompt("Введите позицию символа для удаления (нумерация с 1):")) - 1;

    if (isNaN(position) || position < 0 || position >= userString.length) {
        console.log("Ошибка: неверная позиция!");
        return;
    }

    console.log("Результат:", removeCharAt(userString, position));
}

startMenu();
