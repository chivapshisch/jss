function Calcu (first, second, more, either){
    let summer = first + second;

    if (summer > 10){
        more();
    } else {
        either();
    }
}

function malo(){
    console.log("Malo");
}
function mnogo(){
    console.log("Mnog");
}

Calcu(20, 1, mnogo, malo);

function Opyt(onego, twogo){
    let summer = onego + twogo;
    return summer;

}
let gopyta = Opyt(1, 10);

function Opyt2(onego, twogo){
    let summer = onego + twogo;
    return summer;

}
let gopyta2 = Opyt2(100, 100);
console.log(gopyta2 - gopyta);
console.log('Пошел нахуй');

let ytr = 1e5;
console.log(ytr);