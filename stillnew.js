"use strict"
/*let heroes = 'hero';
let first = 'forty';
let object = {
    age: 16,
    user: 'John',
    [heroes + " liker huev"]: "Vity",
    [first]: 'yes',
};

console.log(object['age']);
console.log(object['hero liker huev']);
console.log(object[first]);

let infor = {
    job: 'forr',
    home: 42,
    adress: {
        street: "ZElenaya",
        house: 333,
    }
}

console.log(infor['adress']['street']);*/


function  makeUser(name, age){
    return{
        name: name,
        age: age,
    };
}
let user = makeUser("Fara", 33);
console.log(user);

let artist = {
    art: "huilan",
    
}

artist.new = "bera";
delete artist.art;

let tru = Object.assign({}, artist);
tru.dobavil = 'eeeeeeba';


if (tru.new){
    console.log(1)
}

console.log(tru?.new);

if ("new" in tru){
    console.log(tru.new);
}

for (let i in tru){
    console.log(tru[i]);
}

let ytr = 1e5;
console.log(ytr);

let ty = Math.floor(2.2); /* Math ceil округляет в большую, math округляет до ближайшего целого  */
console.log(ty);
console.log(ty.toFixed(1));

console.log(parseFloat("150.58"));
console.log(parseInt("150.33px"));
console.log(Math.pow(3, 3));