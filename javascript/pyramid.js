// Вариант 1 for

function pyramid1(){
    let a = "";
    console.log( 'Вариант 1 for' );
    return function () {
        for (let i = 0; i < 7; i++) {
            a = a + "#";
            console.log(a);
        }
    }
}

let b = pyramid1();
b();

console.log(' ') // отступ для следующего скрипта

// Вариант 2 while

let d = '';
let j = 0;
console.log( 'Вариант 2 while' );
while (j < 7) {
  j++;
  d = d + '#';
  console.log (d);
}

console.log(' ') // отступ для следующего скрипта

// Вариант 3 do...while

let g = '';
let y = 0;
console.log( 'Вариант 3 do...while' );
do {
  y++;
  g = g + '#';
  console.log (g);
} while (y < 7);

console.log(' ') // отступ для следующего скрипта

// Вариант 4 recursion

let z = '';
console.log( 'Вариант 4 recursion' );

function pow(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
      z = z + '#';
      console.log(z);
    }
    return result;
  }
pow(1, 7);