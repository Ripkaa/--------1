// 1. Дата - День недели
function getDayOfTheWeek(dateString) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const date = new Date(dateString);
    return days[date.getDay()];
}

// 2. Дни до Нового Года
function UntillNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// 3. Предыдущий, текущий и следующий дни недели
function getDaysAround() {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const today = new Date();
    const curr = today.getDay();
    return {
        prev: days[(curr + 6) % 7],
        curr: days[curr],
        next: days[(curr + 1) % 7]
    };
}

// 4. Миллисекунды в Дни, часы, минуты и секунды
function msToTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { d, h, m, s };
}

// 5. Рассчёт возраста
function getAgeByBirthday(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

// 6. Пятницы 13-е
function Fridays_13() {
    const year = new Date().getFullYear();
    const fridays13 = [];
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            fridays13.push(date.toLocaleDateString());
        }
    }
    return fridays13;
}

// 7. Приветствие
function GreetingForUser() {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) {
        return 'Доброе утро';
    } else if (hours >= 12 && hours < 18) {
        return 'Добрый день';
    } else if (hours >= 18 && hours < 24) {
        return 'Добрый вечер';
    } else {
        return 'Доброй ночи';
    }
}

// 8. Дни праздников
function HolidaysAndWeekends() {
    const year = new Date().getFullYear();
    const HolidaysAndWeekends = [
        new Date(year, 0, 1),   // Новый год
        new Date(year, 1, 23),  // День защитника Отечества
        new Date(year, 2, 8),   // Международный женский день
        new Date(year, 4, 1),   // Праздник весны и труда
        new Date(year, 4, 9),   // День Победы
        new Date(year, 5, 12),  // День России
        new Date(year, 10, 4)   // День народного единства
    ];
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    return HolidaysAndWeekends.map(date => ({
        date: date.toLocaleDateString(),
        day: days[date.getDay()]
    }));
}

function startMenu() {
    while (true){
        let choice = prompt(
            "Выберите задачу:\n" +
            "1. Узнать день недели\n" +
            "2. Узнать, сколько дней до Нового года\n" +
            "3. Узнать предыдущий, текущий и следующий дни недели\n" +
            "4. Преобразовать миллисекунды в дни, часы, минуты и секунды\n" +
            "5. Рассчитать возраст\n" +
            "6. Найти все пятницы 13-го в текущем году\n" +
            "7. Приветствие в зависимости от времени суток\n" +
            "8. Дни недели для официальных праздников\n" +
            "0. Выход\n"
        );

        if (choice === "0") {
            console.log("Выход из программы");
            break;
        }

        switch (choice) {
            case '1':
                const dateString = prompt('Введите дату в формате ГГГГ-ММ-ДД:');
                console.log('День недели:', getDayOfTheWeek(dateString));
                break;
            case '2':
                console.log('Дней до Нового года:', UntillNewYear());
                break;
            case '3':
                console.log('Дни недели вокруг текущего:', getDaysAround());
                break;
            case '4':
                const ms = parseInt(prompt('Введите количество миллисекунд:'), 10);
                console.log('Преобразование миллисекунд:', msToTime(ms));
                break;
            case '5':
                const birthDateString = prompt('Введите дату рождения в формате ГГГГ-ММ-ДД:');
                console.log('Возраст:', getAgeByBirthday(birthDateString));
                break;
            case '6':
                console.log('Пятницы 13-го:', Fridays_13());
                break;
            case '7':
                console.log('Приветствие:', GreetingForUser());
                break;
            case '8':
                console.log('Праздники и дни недели:', HolidaysAndWeekends());
                break;
            default:
                console.log('Неверный выбор. Попробуйте снова.');
        }
    }
}

startMenu();

