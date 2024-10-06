// Function to create 'despesas' element
const div_despesas = document.querySelector('.despesas');

const createElements = (descricao, valor) => {
    const div_despesa = document.createElement('div');
    div_despesa.className = 'despesa';
    div_despesas.appendChild(div_despesa);

    const h2 = document.createElement('h2');
    h2.textContent = descricao;
    h2.id = descricao;
    div_despesa.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = valor;
    p.id = valor;
    div_despesa.appendChild(p);

    const div_buttons = document.createElement('div');
    div_buttons.className = 'buttons';
    div_despesa.appendChild(div_buttons);

    const button_edit = document.createElement('button');
    button_edit.id = 'edit';
    button_edit.textContent = 'Edit';
    div_buttons.appendChild(button_edit);

    const button_delete = document.createElement('button');
    button_delete.id = 'delete';
    button_delete.textContent = 'Delete';
    div_buttons.appendChild(button_delete);

}