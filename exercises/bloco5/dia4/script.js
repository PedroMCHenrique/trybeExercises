// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).



function bgColorChange() {
    let body = document.querySelector('body');
    if (body.style.backgroundColor === 'rgb(169, 169, 169)') {
    body.style.backgroundColor = 'rgb(255, 250, 250)';
    } else {
        body.style.backgroundColor = 'rgb(169, 169, 169)';
    }
    console.log('bgColorChange');
}

function bgColorBtn() {
    let bgBtn = document.getElementById('bgColor');
    console.log(bgBtn);
    bgBtn.addEventListener('click', bgColorChange);
}

bgColorBtn();




