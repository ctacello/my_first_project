// a - 1е значение
// b - 2е значение
// c - шаг диапазона

function range(a, b, c) {
  if (c == null) c = 1;
  
  let arr = [];

  if (c > 0) {
    for (let i = a; i <= b; i += c) {
      arr.push(i);
    }
  } else {
    for (let i = a; i >= b; i += c) {
      arr.push(i);
    }
  }
  return arr;  
}

function sum(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    j += arr[i];
  }
  return j;
}

console.log(sum(range(1,100)));
console.log(range(10, 1, -2));