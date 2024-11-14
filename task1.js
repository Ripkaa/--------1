// 1. Запрашиваем число у пользователя с помощью prompt и проверяем, является ли оно числом
function promptForNumber(message) {
    const userInput = prompt(message);
    const number = parseFloat(userInput);
    if (isNaN(number)) {
        alert("Введенное значение не является числом. Перезагрузите страницу и попробуйте снова.");
        throw new Error("Input is not a valid number");
    }
    return number;
}

// 2. Проверяем, является ли число положительным, отрицательным или нулем
function checkPositiveOrNegative() {
    const number = promptForNumber("Введите любое число для проверки, положительное оно или отрицательное:");
    if (number > 0) {
        console.log(`Введенное число ${number} положительное`);
    } else if (number < 0) {
        console.log(`Введенное число ${number} отрицательное`);
    } else {
        console.log("Введенное число 0");
    }
}

// 3. Проверка решений квадратного уравнения
function quadraticEquationRoots() {
    const a = promptForNumber("Введите коэффициент a для квадратного уравнения:");
    const b = promptForNumber("Введите коэффициент b для квадратного уравнения:");
    const c = promptForNumber("Введите коэффициент c для квадратного уравнения:");

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        console.log("Уравнение имеет два различных корня.");
    } else if (discriminant === 0) {
        console.log("Уравнение имеет один корень.");
    } else {
        console.log("Уравнение не имеет вещественных корней.");
    }
}

// 4. Проверка, могут ли три числа быть сторонами треугольника
function checkTriangleSides() {
    const a = promptForNumber("Введите длину стороны a:");
    const b = promptForNumber("Введите длину стороны b:");
    const c = promptForNumber("Введите длину стороны c:");

    if (a + b > c && a + c > b && b + c > a) {
        console.log("Эти длины могут быть сторонами треугольника.");
    } else {
        console.log("Эти длины не могут быть сторонами треугольника.");
        if (a + b <= c) console.log("Сумма сторон a и b меньше или равна стороне c.");
        if (a + c <= b) console.log("Сумма сторон a и c меньше или равна стороне b.");
        if (b + c <= a) console.log("Сумма сторон b и c меньше или равна стороне a.");
    }
}

// 5. Нахождение пары чисел с максимальной суммой
function findMaxSumPair() {
    const x1 = promptForNumber("Введите первое число:");
    const x2 = promptForNumber("Введите второе число:");
    const x3 = promptForNumber("Введите третье число:");
    const x4 = promptForNumber("Введите четвертое число:");

    const method = promptForNumber("Выберите метод вычисления максимальной суммы пар чисел: 1 или 2");

    switch (method) {
        case 1:
            const sum1 = x1 + x2;
            const sum2 = x1 + x3;
            const sum3 = x1 + x4;
            const sum4 = x2 + x3;
            const sum5 = x2 + x4;
            const sum6 = x3 + x4;
            const maxSum = Math.max(sum1, sum2, sum3, sum4, sum5, sum6);
            console.log(`Максимальная сумма пар чисел (метод 1) равна: ${maxSum}`);
            break;
        
        case 2:
            let maxSum2 = x1 + x2;
            if (x1 + x3 > maxSum2) maxSum2 = x1 + x3;
            if (x1 + x4 > maxSum2) maxSum2 = x1 + x4;
            if (x2 + x3 > maxSum2) maxSum2 = x2 + x3;
            if (x2 + x4 > maxSum2) maxSum2 = x2 + x4;
            if (x3 + x4 > maxSum2) maxSum2 = x3 + x4;
            console.log(`Максимальная сумма пар чисел (метод 2) равна: ${maxSum2}`);
            break;
        
        default:
            alert("Неправильный выбор метода. Перезагрузите страницу и выберите 1 или 2.");
            throw new Error("Invalid method selection");
    }
}

try {
    promptForNumber("Введите любое число для проверки:");
    checkPositiveOrNegative();
    quadraticEquationRoots();
    checkTriangleSides();
    findMaxSumPair();
} catch (error) {
    console.error("Программа завершена из-за ошибки:", error);
}
