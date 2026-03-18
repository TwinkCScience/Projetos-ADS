const textarea = document.getElementById('txt_code');
const btn = document.getElementById('toggle');
const sp = document.querySelector('span');
const txt = document.getElementById('string_count');
const body = document.body;

const STORAGE_KEYS = {
    theme: 'color',
    text: 'code'
}

const colorSaved = localStorage.getItem(STORAGE_KEYS.theme);
const codeSaved = localStorage.getItem(STORAGE_KEYS.text);

if(codeSaved){
    textarea.value = codeSaved;
    sp.innerHTML = codeSaved;
    txt.textContent = codeSaved.length;
}

if(colorSaved){
    body.classList.add(colorSaved);

    if(colorSaved === 'dark_mode'){
        btn.textContent = "☀️";
    }
    else{
        btn.textContent = "🌑";
    }
}

textarea.addEventListener('input', function(){
    sp.innerHTML = textarea.value;
    txt.textContent = textarea.value.length;

    localStorage.setItem(STORAGE_KEYS.text, textarea.value);
})

btn.addEventListener('click', function(){
    if(body.classList.contains('light_mode')){
        body.classList.remove('light_mode');
        body.classList.add('dark_mode');
        btn.textContent = "☀️";

        localStorage.setItem(STORAGE_KEYS.theme, 'dark_mode');
    }
    else {
        body.classList.remove('dark_mode');
        body.classList.add('light_mode');
        btn.textContent = "🌑";

        localStorage.setItem(STORAGE_KEYS.theme, 'light_mode');
    }
})