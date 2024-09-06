"use strict"

/*let num = 0;
while (num < 5){
    console.log(num);
    num++;
}

console.log("Новый цикл")

num = 5;
while (num){
    console.log(num);
    num--;
} */

for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log("Новый цикл");

let n = 0;
for (;n < 5;){
    console.log(n);
    n++;
    if (n == 3) break;
}

console.log(`Закончили: ${n}`)