// 1. Ссылки
console.log('---------------------1---------------------')
function LinkGenerator(category) {
    const baseUrl = "http://myshop.ru/";
    return function (productId) {
        return `${baseUrl}${category}/${productId}`;
    };
}

const PClink = LinkGenerator("PC");
const NotebookLink = LinkGenerator("Notebooks");
const MonitorLink = LinkGenerator("Monitors");

console.log(PClink(1001));
console.log(NotebookLink(4004));
console.log(MonitorLink(345));

// 2. Инфо заказ
console.log('---------------------2---------------------')
let orders = [
    { 
        fio: "Ivan", 
        tovar: "phone", 
        price: 10000, 
        quantity: 2 
    },
    { 
        fio: "Peter", 
        tovar: "usb", 
        price: 2300, 
        quantity: 5 
    },
    { 
        fio: "Mary", 
        tovar: "connector", 
        price: 100, 
        quantity: 100 },
];

function Summ(orders) {
    orders.forEach(order => {
        const total = order.price * order.quantity;
        console.log(`Заказ покупателя ${order.fio} составил: ${total}`);
    });
}

Summ(orders);

// 3. Добавление скидки
console.log('---------------------3---------------------')
function Summ_Discount(orders, discountPercent) {
    orders.forEach(order => {
        const total = order.price * order.quantity;
        console.log(`Заказ покупателя ${order.fio} составил: ${total}, скидка составила 0%`);
    });
    orders.forEach(order => {
        const total = order.price * order.quantity;
        const discountedTotal = total * (1 - discountPercent / 100);
        console.log(`Заказ покупателя ${order.fio} составил: ${discountedTotal.toFixed(2)}, скидка составила ${discountPercent}%`);
    });
}

Summ_Discount(orders, 10);

// 4. Изменённый wrapperA
console.log('---------------------4---------------------')
function Menu(...navList) {
    this.navList = navList;
    this.wrapperA = function (anchorTexts) {
        return this.navList.map((elem, index) => {
            const anchorText = anchorTexts[index] || "item";
            return `<a href='${elem}'>${anchorText}</a>`;
        });
    };
}

let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html");
console.log(mainMenu.wrapperA(["Home", "Services", "Pricing", "About"]));

let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html");
console.log(footerMenu.wrapperA(["New Page", "Check Page", "SEO Page"]));
