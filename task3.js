// 1. Функция определения пола
function defineGender(gender) {
    if (gender === 'М') {
      return "Ваш пол мужской";
    } else if (gender === 'Ж') {
      return "Ваш пол женский";
    } else {
      return "Ваш пол не определён";
    }
}
  
// 2. Функция, возвращающая день недели по номеру (1-7)
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Некорректный номер дня недели";
    }
}
  
// 3.1 Функции поиска минимума из трёх чисел
function findMin(a, b, c) {
    return Math.min(a, b, c);
    
}
// 3.2 Функции поиска максимума из трёх чисел
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
  
// 4. Функциональное выражение для приветствия по возрасту
const greetUser = function(name, age) {
    if (typeof age !== 'number' || age < 0) {
      console.log("Укажите корректные данные!");
    } else if (age < 18) {
      console.log(`${name}, вы еще очень молоды!`);
    } else if (age <= 50) {
      console.log(`${name}, добро пожаловать в личный кабинет!`);
    } else {
      console.log(`${name}, моё почтение!`);
    }
};
  
// 5. Функциональное выражение для проверки типа данных
const checkType = function(value) {
    const numberValue = Number(value);
  
    if (!isNaN(numberValue)) {
      console.log("Тип данных: number");
    } else if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
      console.log("Тип данных: boolean");
    } else if (value === "null") {
      console.log("Тип данных: object (null)");
    } else if (value === "undefined") {
      console.log("Тип данных: undefined");
    } else {
      console.log("Тип данных: string");
    }
};
  
// 6. Математический тренажёр со случайными числами и проверкой ответа
const mathTrainer = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const correctAnswer = num1 + num2;
    const userAnswer = parseInt(prompt(`Сколько будет ${num1} + ${num2}?`));
  
    if (userAnswer === correctAnswer) {
        alert("Ответ правильный!");
    } else {
        alert(`Неправильно! Правильный ответ: ${correctAnswer}`);
    }
};

function startProgram() {
    const choice = prompt(
    "Выберите действие:\n" +
    "1 - Определить пол\n" +
    "2 - Получить день недели\n" +
    "3 - Найти минимум из трёх чисел\n" +
    "4 - Найти максимум из трёх чисел\n" +
    "5 - Приветствие по возрасту\n" +
    "6 - Проверить тип данных\n" +
    "7 - Математический тренажёр\n" +
    "8 - Выход\n"
    );
  
    switch (choice) {
        case "1":
            const gender = prompt("Введите ваш пол ('М' или 'Ж'):");
            alert(defineGender(gender));
            startProgram();
            break;
    
        case "2":
            const dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));
            alert(getDayOfWeek(dayNumber));
            startProgram();
            break;
    
        case "3":
            const num1 = parseFloat(prompt("Введите первое число:"));
            const num2 = parseFloat(prompt("Введите второе число:"));
            const num3 = parseFloat(prompt("Введите третье число:"));
            alert(`Минимум: ${findMin(num1, num2, num3)}`);
            startProgram();
            break;
    
        case "4":
            const numA = parseFloat(prompt("Введите первое число:"));
            const numB = parseFloat(prompt("Введите второе число:"));
            const numC = parseFloat(prompt("Введите третье число:"));
            alert(`Максимум: ${findMax(numA, numB, numC)}`);
            startProgram();
            break;
    
        case "5":
            const name = prompt("Введите ваше имя:");
            const age = parseInt(prompt("Введите ваш возраст:"));
            greetUser(name, age);
            startProgram();
            break;
    
        case "6":
            const value = prompt("Введите значение для проверки типа данных:");
            checkType(value);
            startProgram();
            break;
    
        case "7":
            mathTrainer();
            startProgram();
            break;

        case "8":
            break;
        
        default:
            alert("Некорректный выбор!");
            break;
    }
}

startProgram();