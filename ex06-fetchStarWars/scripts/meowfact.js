const output = document.getElementById('output');
const limit = document.getElementById('limit');
const submit_button = document.getElementById('submit-button');

const fetchData = async (url) => {
    try{
        const promiseFetch = await fetch(url);
        
        const jsonData = await promiseFetch.json();
        const formatedText = JSON.stringify(jsonData, null, 2);
        output.textContent = formatedText;

    } catch(err){
        console.log(`Error: ${err}`)
    }
}

submit_button.addEventListener('click', () => {
    const limit_number = limit.value;
    const url = `https://meowfacts.herokuapp.com/?count=${limit_number}`;

    fetchData(url);
});