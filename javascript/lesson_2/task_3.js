// Вариант 1 функция reverseArray
console.log('Вариант 1 функция reverseArray');
function reverseArrayV1(a) {
    arr = [];
    for (let i = a.length - 1; i >= 0; i--) {
        arr.push(a[i]);
    }
    return arr;
}
console.log(reverseArrayV1(["A", "B", "C"]));
console.log('');

// Вариант 2 функция reverseArray
console.log('Вариант 2 функция reverseArray');
function reverseArrayV2(b){
    arr = [];
    b.forEach(element => {
        arr.unshift(element);
    });
    return arr;
}

console.log(reverseArrayV2(["A", "B", "C"]));
// => ["C", "B", "A"];

// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // => [5, 4, 3, 2, 1]
