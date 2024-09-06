"use strict"

let num = 33;
let userAge = String(num);
console.log(typeof userAge);
/*
Number - преобразование в число 
String - преобразование в строку
Boolean - преобразование в тру фолс если пустая строка или ноль то фолс
*/ 

let nuller = 10;
let preobr = Boolean(nuller);
console.log(preobr);

let info = {
    name: "huila",
    age: userAge
}

console.log(info);

let umn = 10 * 'ff';
console.log(typeof umn);

let srav = 10 !== "12";
console.log(srav);
