"use strict"

let yer = 33;
console.log(yer);

let data = [{
    namet: 'ddd',
    rrr: true,
    num: 222,
}    
]

/*for (let i in data){
    console.log(data[i]);
}*/
let korka = [222, 111]

korka.push(333);
korka.splice(1, 1, 'dd');
let ror = korka.concat('far')
console.log(ror.sort());