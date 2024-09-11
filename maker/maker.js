const windowWidth = window.innerWidth;
console.log(windowWidth);
/*alert(windowWidth);*/
/* promt выводит две кнопки и поел ввода
const confara = confirm(windowWidth);
console.log(confara);*/

const head = document.head;
const htmlcode = document.documentElement;
const body = document.body;

/*console.log(head);
console.log(htmlcode);*/

/*
const head_first = body.firstChild;
const head_second = body.lastChild;

console.log(head_first);
console.log(head_second);
*/


/*
обращение к дочерним и тд

const prer = body.previousSibling;
const ftt = body.nextSibling;
const parent = body.parentNode;

console.log(prer);
console.log(ftt);
console.log(parent);*/

const telo = document.body;
const telo_children = telo.children;


/* queryElementById - поиск по id*/
/* getElementByTagName - поиск по тегу*/
const teg = document.querySelectorAll('div')[0];
console.log(teg);

const listlive = document.getElementsByClassName('lala');
console.log(listlive);