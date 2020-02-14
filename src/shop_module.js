export class Shop { 
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