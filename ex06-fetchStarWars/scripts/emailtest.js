const submit_button = document.getElementById('submit-button');
const input_email = document.getElementById('input-email');
const output = document.getElementById('output');
console.log(submit_button);

const fetchData = async (url) => {
    try{
        const promiseFetch = await fetch(url);

        const jsonData = await promiseFetch.json();
        console.log(jsonData);
        const formatedText = JSON.stringify(jsonData, null, 2);
        output.textContent = formatedText;

    } catch(err){
        console.log(`Error: ${err}`);
    }
}

submit_button.addEventListener('click', () => {
    const email = input_email.value;
    const url = `https://www.disify.com/api/email/${email}`;

    fetchData(url);
});