//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição
//Subtração
//Multiplicação
//Divisão
//Módulo

let a = 5;
let b = 2;

console.log('A soma é ' +(a + b));
console.log('A subtração é ' +(a - b));
console.log('A multiplicação é '+(a * b));
console.log('A divisão é ' +(a / b));
console.log('O módulo é ' +(a % b));

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let c = 21;
let d = 25;

if (c > d){
    console.log(c + ' é maior que '+ d);
} else {
    console.log(d + ' é maior que ' + c);
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let e = 25;
let f = 10;
let g = 15;

if (e > f && e > g){
    console.log('O maior número é '+ e);
} else if (f > e && f > g) {
    console.log('O maior número é '+ f);
} else {
    console.log('O maior número é '+ g);
}

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let h = 0;
if (h > 0){
    console.log('positive');
} else if (h < 0) {
    console.log('negative');
} else {
    console.log('zero');
}