console.log("Hello, world, my name is Staniz.");
console.log("Lets do this task!");
console.log("Test hash");
console.log(' ')

import {Shop} from './shop_module';

let MyCart = new Shop;

import {client} from './client_module';

let client01 = new client("John", "Tribiani", 0)
let client02 = new client("Max", "Lanister", 0)

MyCart.addClient(client01);
MyCart.addClient(client02);

MyCart.removeClient(1);

import {goods} from './goods_module';

let storage1 = new goods("Apple", "Fruits", 10);
let storage2 = new goods("Cherry", "Fruits", 15);
let storage3 = new goods("Tomato", "Vegetables", 20);
let storage4 = new goods("Cap", "Kitchen", 50);

MyCart.addGoods(storage1);
MyCart.addGoods(storage2);
MyCart.addGoods(storage3);
MyCart.addGoods(storage4);

MyCart.removeGoods(3);

import {buyHistory} from './buyHistory_module';

console.log(MyCart.clients);
console.log(MyCart.goods);

console.log(MyCart.clients.client01);