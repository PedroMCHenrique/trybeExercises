function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;

      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();

  // Escreva seu código abaixo.

//1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>



function calendarDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const idDays = document.querySelector('#days')
  for(let index = 0; index < dezDaysList.length; index += 1) {
    let daysList = document.createElement('li');
    daysList.innerText = dezDaysList[index];
    daysList.className = 'day';
    idDays.appendChild(daysList);

    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      daysList.className = 'day holiday';
    }

    else if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index === 25]) {
      daysList.className = 'day friday';
    }
    if (dezDaysList[index] === 25){
      daysList.className = 'day friday holiday';
    }
  }
}
calendarDays();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function buttonHoliday(param1) {
  let buttonFeriados = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonFeriados.innerText = param1;
  buttonFeriados.id = 'btn-holiday';
  buttonsContainer.appendChild(buttonFeriados);
}
buttonHoliday('feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function clickBg() {
  let getHoliday = document.querySelectorAll('.holiday');
  for(let index = 0; index < getHoliday.length; index += 1){

    if(getHoliday[index].style.backgroundColor === 'red') {
      getHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
    getHoliday[index].style.backgroundColor = 'red';
    }
  }
}

function bgButtonHoliday() {
let btnFeriados = document.querySelector('#btn-holiday');
btnFeriados.addEventListener('click', clickBg)
}
bgButtonHoliday();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function buttonFriday(para1) {
  let btnFriday = document.createElement('button');
  let btnContainer = document.querySelector('.buttons-container');
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = para1;
  btnContainer.appendChild(btnFriday);
}
buttonFriday('Sexta-Feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function fridayEventBtn(){
  let btnSextaFeira = document.querySelector('#btn-friday');
  btnSextaFeira.addEventListener('click', txtButtonFriday);
}

function txtButtonFriday() {
let fridayClass = document.querySelectorAll('.friday');
const arrayFriday = [4, 11, 18, 25];
  for(let index = 0; index < fridayClass.length; index += 1) {

    if(fridayClass[index].innerText === 'Sextou') {
      fridayClass[index].innerText = arrayFriday[index];
    } else {
      fridayClass[index].innerText = 'Sextou';
    }
  }
}
fridayEventBtn();