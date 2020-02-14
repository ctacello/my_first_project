const Cart = function(id) {
    this.id = id; // айди 
    this.items = []; // массив с товаром

    this.addItem = (item) => { // Добавить товар
        this.items.push(item);
    }
    this.removeItemByIndex = (index) => { // Удалить товар
        // To do
    }
    this.checkout = () => { // Сумма покупки
        let sum = 0;
        
        this.items.map((element) => { // подсчет суммы
            sum += element.value;
        })

        return sum;
    }
}

const Item = function(title, value) {
    this.title = title;
    this.value = value;
}

let myFirstCart = new Cart(1);

let shoes = new Item('Shoes', 100);
let coat = new Item('Coat', 200);
let car = new Item('Car', 2000);

myFirstCart.addItem(shoes);
myFirstCart.addItem(coat);
myFirstCart.addItem(car);

console.log(myFirstCart.items[0].title); // элемент массива

console.log(myFirstCart.checkout()); //сумма покупок

console.log(myFirstCart);

console.log(shoes);