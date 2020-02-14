class Shop { 
    constructor() {
        this.clients = [];
        this.goods = [];
        this.buyHistory = [];

        this.addClient = (client) => {
            this.clients.push(client);
        }

        this.removeClient = (index) => {
            this.clients.splice(index, 1);
        }

        this.addGoods = (goods) => {
            this.goods.push(goods);
        }

        this.removeGoods = (index) => {
            this.goods.splice(index, 1);
        }

        this.addBuyHistory = (buyHistory) => {
            this.buyHistory.push(buyHistory);
        }

        this.removeBuyHistory = (index) => {
            this.BuyHistory.splice(index, 1);
        }
    }
}

class client {
    constructor(name, secondname, sum) {
        this.name = name;
        this.secondname = secondname;
        this.sum = sum;

        // this.sum = () => { // Сумма покупки
        //     let sum = 0;

        //     this.items.map((element) => { // подсчет суммы
        //         sum += element.value;
        //     })

        //     return sum;
        // }
    }
}

class goods {
    constructor(title, type, value) {
        this.title = title;
        this.type = type;
        this.value = value;
    }
}

class buyHistory {
    constructor(time, goodsName, goodsType, goodsCount, goodsSum) {
        this.time = time;
        this.goodsName = goodsName;
        this.goodsType = goodsType;
        this.goodsCount = goodsCount;
        this.goodsSum = goodsSum;

        // this.goodsSum = () => { // Сумма покупки
        //     let sum = 0;

        //     this.items.map((element) => { // подсчет суммы
        //         sum += element.value;
        //     })

        //     return sum;
        // }
    }
}

let MyCart = new Shop;

let client01 = new client("John", "Tribiani", 0)
let client02 = new client("Max", "Lanister", 0)

MyCart.addClient(client01);
MyCart.addClient(client02);

MyCart.removeClient(1, 1);

let storage1 = new goods("Apple", "Fruits", 10);
let storage2 = new goods("Cherry", "Fruits", 15);
let storage3 = new goods("Tomato", "Vegetables", 20);
let storage4 = new goods("Cap", "Kitchen", 50);

MyCart.addGoods(storage1);
MyCart.addGoods(storage2);
MyCart.addGoods(storage3);
MyCart.addGoods(storage4);

MyCart.removeGoods(3);

console.log(MyCart.clients);
console.log(MyCart.goods);