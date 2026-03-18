const btn = document.getElementById('btn_conversor');
const input = document.getElementById('numb_txt');
const fahrenheit_conversor = document.getElementById('fahrenheit_conversor');
const celsius_conversor = document.getElementById('celsius_conversor');
const conversor_p = document.getElementById('conversor_p');

let value_degree;

function submitBtn(){

    const num = Number(input.value);

    while (true){
        if(fahrenheit_conversor.checked){
            value_degree = (num * 1.8) + 32;
            conversor_p.textContent = value_degree;
        }
        else if(celsius_conversor.checked){
            conversor_p.textContent = value_degree;
        }
        else {
            conversor_p.innerHTML = '<p style="color: red;">Digite algum número ou aperte um dos botões</p>';
        }
    }
}