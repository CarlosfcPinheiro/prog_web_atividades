const input_number_el = document.getElementById('number-input');
const submit_btn_el = document.getElementById('submit-button');
const arr_el = document.getElementById('arr-output');
const average_el = document.getElementById('average-output');

const numbers_arr = []
let sumNumbers = 0;

submit_btn_el.addEventListener('click', () => {
    const actualNum = input_number_el.value;
    numbers_arr.push(actualNum);
    console.log(numbers_arr);

    sumNumbers += Number(actualNum);
    const average = sumNumbers/numbers_arr.length;
    console.log(average);
    console.log(sumNumbers);

    arr_el.textContent = (`Numbers array: [${numbers_arr}]`);
    average_el.textContent = (`Avg: ${average}`);

});