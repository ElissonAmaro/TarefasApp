const form = document.querySelector('#tarefaForm')
const input = document.querySelector('#tarefaInput')
const btnInput = document.querySelector('.btn')



//Quando formulario for enviado  (clicar no botão)


form.addEventListener('click', function(event){
    
    


    const valorDigitado = input.value;

    console.log('voce digitou', valorDigitado)
    input.value = '';
})




