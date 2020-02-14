export class buyHistory {
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