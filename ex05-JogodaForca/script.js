const hangmanStages = [
`   
   +---+
   |   |
       |
       |
       |
       |
 =========`,
`   
   +---+
   |   |
   O   |
       |
       |
       |
 =========`,
`   
   +---+
   |   |
   O   |
   |   |
       |
       |
 =========`,
`   
   +---+
   |   |
   O   |
  /|   |
       |
       |
 =========`,
`   
   +---+
   |   |
   O   |
  /|\\  |
       |
       |
 =========`,
`   
   +---+
   |   |
   O   |
  /|\\  |
  /    |
       |
 =========`,
`   
   +---+
   |   |
   O   |
  /|\\  |
  / \\  |
       |
 =========`
]

// Elements
const hangman_ascii = document.getElementById('hangman');
const hidden_letters = document.getElementById('hidden-letters');
const buttons_div = document.getElementById('buttons');

let tries = 0;
const array_palavras = ['MARCIO', 'PROFESSOR', 'JOGO', 'BOLA', 'LAPIS', 'BOLINHA', 'SEBOSO', "YOGA", "YAKISOBA", "CANAL", "YETI", "YUPPIE", 'AMIGO', 'LEGAL', 'LOUCURA', 'MUSARANHO', 'SAGUI', 'FOCA', 'VENENO', 'RORAIMA', 'BRASIL', 'CANANDA', 'KERNEL', 'LINUX', 'JAVA', 'PHP'];

const randomIndex = (array) => {
    const index = parseInt(Math.random()*(array.length-1));
    return index;
}

function generateHiddenLetters(randomWord){
    for (let i=0; i<randomWord.length; i++){
        const h2_hiddenLetter = document.createElement('h2');
        h2_hiddenLetter.textContent = '_';
        h2_hiddenLetter.setAttribute('id', randomWord[i]);
        hidden_letters.appendChild(h2_hiddenLetter);
    }
}

function generateButtons(){
    for (let i=0; i<26; i++){
        const button_letter = document.createElement('button');
        button_letter.textContent = String.fromCharCode(65+i);
        buttons_div.appendChild(button_letter); 
    }
}

// First state
const randomWord = array_palavras[randomIndex(array_palavras)];
const randomWord_split = randomWord.split('');
generateHiddenLetters(randomWord);
generateButtons();
// console.log(randomWord);

hangman_ascii.textContent = hangmanStages[0];

const buttons_array = document.querySelectorAll('#buttons button')
for (let c=0; c<26; c++){
    buttons_array[c].addEventListener('click', () => {
        // Disable button after clicking
        buttons_array[c].disabled = true;

        if (tries >= 6){
            window.alert(`Você perdeu. A palavra era: ${randomWord}`);
            window.location.reload();
        }

        if (randomWord.includes(buttons_array[c].textContent)){
            hidden_letters.childNodes.forEach((letter_el) => {
              // console.log(letter_el.id);
              if (letter_el.id === buttons_array[c].textContent){
                letter_el.textContent = letter_el.id;
              }
            });
        } else{
            tries += 1;
            hangman_ascii.textContent = hangmanStages[tries];
        }
    });
}