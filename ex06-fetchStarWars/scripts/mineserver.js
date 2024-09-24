const input_address = document.getElementById('input-address');
const send_button = document.getElementById('send-button');
const output = document.getElementById('output');

const fetchData = async (url) => {
    // try and catch block
    try{
        // GET request
        const promiseFetch = await fetch(url);

        const jsonData = await promiseFetch.json();
        const formatedText = JSON.stringify(jsonData, null, 2);
        output.textContent = formatedText;

    } catch(err){
        console.log(`Error: ${err}`);
    }
}

send_button.addEventListener('click', () => {
    const address = input_address.value;
    console.log(address);
    const url = `https://api.mcsrvstat.us/3/${address}`;

    fetchData(url);
});

// Exporting function as a module
module.exports = fetchData;