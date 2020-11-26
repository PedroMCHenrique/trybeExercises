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

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let angleOne = 40;
let angleTwo = 80;
let angleThree= 60;

if (angleOne + angleTwo + angleThree == 180) {
    console.log('true');
} else {
    console.log('false');
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessPiece = 'pawn';

switch(chessPiece) {
    case 'king':
        console.log('move one square in any direction, so long as that square is not attacked by an enemy piece.');
        break;

    case 'queen':
        console.log('move diagonally, horizontally, or vertically any number of squares. any direction');
        break;
    
    case 'rooks':
        console.log('horizontally or vertically any number of squares.');
        break;

    case 'bishop':
        console.log('move diagonally any number of squares.');
        break;

    case 'knight':
        console.log('move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.');
        break;

    case 'pawn':
        console.log('move vertically forward one square, with the option to move two squares if they have not yet moved.');
        break;
    default;
    console.log('peça errada');
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let notaPorcentagem = 51

    if (notaPorcentagem < 0 || notaPorcentagem > 100){
        console.log('Nota inválida');
    }else if(notaPorcentagem >= 90){
        console.log('A');
    } else if(notaPorcentagem >= 80){
        console.log('B');    
    } else if(notaPorcentagem >= 70){
        console.log('C');
    } else if(notaPorcentagem >= 60){
        console.log('D');
    } else if(notaPorcentagem >= 50){
        console.log('E');
    } else {
        console.log('F');
    }

    //Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

    let i = 2;
    let j = 2;
    let k = 10;

    if(i % 2 == 0 || j % 2 == 0 || k % 2 == 0){
        console.log('true');
    } else {
        console.log('false');
    }

 //Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

 
    if(i % 2 == 1 || j % 2 == 1 || k % 2 == 1){
        console.log('true');
    } else {
        console.log('false');
    }

