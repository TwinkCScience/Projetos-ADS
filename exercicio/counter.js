// Declaração de variáveis - Referenciar os elementos
/* Declarar as chaves -> objetos, pares de chaves e valores
const nome = {
    propriedade_1: "coisa";
    propriedade_2: "coisa 2";
    propriedade_n: "coisa 3";
}

OBS * localStorage armazena strings. Por isso no carregamento da página, tive que mudar o tipo de Contador, pois ele
guardou como string e tava concatenando +/- 1 no valor que tinha sido armazenado. String() -> Number()

*/
// Carregamento da página usando os dados salvos -> localStorage.getItem()

// Criar os Eventos e salvar os dados -> localStorage.setItem()

const span = document.querySelector('span');
const btn_1 = document.getElementById('btn_au');
const btn_2 = document.getElementById('btn_re');
const btn_3 = document.getElementById('btn_dim');
let contador = 0;
let e;

const STORAGE_KEYS = {
    save: "salvamento",
}

const saveCounter = localStorage.getItem(STORAGE_KEYS.save);
if(saveCounter){
    e = localStorage.getItem(STORAGE_KEYS.save)
    span.textContent = e;
    contador = Number(e);
}


btn_1.addEventListener('click', function increaseBtn(){
    span.textContent = `${contador+=1}`;
    localStorage.setItem(STORAGE_KEYS.save, span.textContent);
})

btn_2.addEventListener('click', function(){
    contador = 0;
    span.textContent = `${contador}`;
    localStorage.setItem(STORAGE_KEYS.save, span.textContent);
})

btn_3.addEventListener('click', function(){
    span.textContent = `${contador-=1}`;
    localStorage.setItem(STORAGE_KEYS.save, span.textContent);
})