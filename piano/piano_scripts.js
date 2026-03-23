const keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const blacks = ['C#', 'D#', 'F#', 'G#', 'A#'];

const piano_box = document.querySelector('.piano');
const auto = document.querySelector('.auto_btn');

auto.addEventListener('click', () => {
    piano_box.innerHTML = '';

    keys.forEach(note => {
        const button = document.createElement('button');
        button.classList.add('key', 'white');
        button.innerText = note;

        const audio = new Audio(`${note}.mp3`);

        button.addEventListener('click', () => {
            audio.currentTime = 0;
            audio.play();

        
        });

        piano_box.appendChild(button);
    });

    blacks.forEach((note, index) => {
        const button = document.createElement('button');
        button.classList.add('key', 'black');
        button.innerText = note;

        const audio = new Audio(`${note}.mp3`);

        button.addEventListener('click', () => {
            audio.currentTime = 0;
            audio.play();
        });

        button.style.left = `${(index + 1) * 14}%`;

        piano_box.appendChild(button);
    });
});