
const submit_sum = document.getElementById('submit-number');
const input_num = document.getElementById('input-number');
const output_sum = document.getElementById('output-sum');

output_sum.value = 0;

submit_sum.addEventListener('click', () => {
    let number = Number(input_num.value);
    output_sum.value = Number(output_sum.value) + Number(number);

});