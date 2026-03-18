const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
const box = document.getElementById("box");

let t = 0;

btn.addEventListener('click', function(e){
    e = txt.value;
    t += 1;
    
    const li = document.createElement('li');
    const exclude = document.createElement('button');
    const val = document.createTextNode(e + " ");
    const counter = document.createTextNode(t + ". ");
    const txt_btn = document.createTextNode("Delete");

    li.appendChild(counter);
    li.appendChild(val);
    li.appendChild(exclude);
    exclude.appendChild(txt_btn);
    li.appendChild(exclude);
    
    box.appendChild(li)
    document.body.appendChild(box);
    box.style.display = "inline";

    exclude.addEventListener('click', function(){
        li.remove();
    })

})