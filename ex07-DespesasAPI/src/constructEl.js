// Function to create 'despesas' element
const div_despesas = document.querySelector('.despesas');

const createElements = (descricao, valor, id) => {
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
    const button_id = `edit ${id}`
    button_edit.id = button_id;
    button_edit.textContent = 'Edit';
    div_buttons.appendChild(button_edit);

    const button_delete = document.createElement('button');
    const delete_id = `delete ${id}`
    button_delete.id = delete_id;
    button_delete.textContent = 'Delete';
    div_buttons.appendChild(button_delete);

    // Functio to reload page after the put request
    const reloadAfterChange = async(objectId, new_descricao, new_valor) => {
        await putRequest(url, objectId, new_descricao, new_valor);
        location.reload();
    }

    // Button edit event listener
    button_edit.addEventListener('click', (event) => {
        // Getting resources for PUT request
        const objectId = event.target.id.split(' ')[1];
        const new_descricao = window.prompt('Digite uma nova descrição:');
        const new_valor = Number(window.prompt('Digite um novo valor:'));
        // Try-catch block to validate PUT request
        try{
            reloadAfterChange(objectId, new_descricao, new_valor);
        } catch (err){
            throw new Error(err);
        }
    });
    // Button delete event listener
    button_delete.addEventListener('click', () => {

    });
}