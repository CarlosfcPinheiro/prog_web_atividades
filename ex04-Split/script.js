const submit_btn = document.getElementById('submit-button');
let input_word = document.getElementById('input-word');
let output_word = document.getElementById('output-word');

const array_palavras = ['MARCIO', 'PROFESSOR', 'CABECAO', 'BOLA', 'LAPIS', 'BOLINHA', 'SEBOSO']

submit_btn.addEventListener('click', () => {
    output_word.textContent = '';

    const actual_word = (input_word.value).toUpperCase();
    const list_word = actual_word.split('');

    for (let i=0; i<list_word.length; i++){
        const letter = document.createElement('p');
        letter.textContent = list_word[i];
        output_word.appendChild(letter);
    }
});