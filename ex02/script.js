const form_inputs = document.querySelectorAll('.form-label input');
const btn_submit = document.getElementById('submit');
const body = document.querySelector('body');

btn_submit.addEventListener('click', () => {
    const value_arr = [];
    const student = {
        name: null,
        mat: null,
        cpf: null,
        idade: null};

    for ( let i=0; i<form_inputs.length; i++){
        value_arr.push(form_inputs[i].value);
    }

    student.name = value_arr[0];
    student.mat = value_arr[1];
    student.cpf = value_arr[2];
    student.idade = value_arr[3];
    
    const showObj_el = document.createElement('p');
    body.appendChild(showObj_el);
    showObj_el.textContent = (`Objeto Aluno: ${JSON.stringify(student)}`);

});