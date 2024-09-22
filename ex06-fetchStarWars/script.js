const button_fetch = document.getElementById('fetch-btn');
const input_id = document.getElementById('input-id');

const fetchData = async() => {
    try{
        const promiseData = await fetch('https://swapi.dev/api/people/');
        console.log(promiseData);

        const responseJson = await promiseData.json();
        console.log(responseJson);
    } catch{
        throw new Error(`Error: {promiseData.status}`)
    }
}

button_fetch.addEventListener('click', () => {
    const id = input_id.value;
    fetchData();
});