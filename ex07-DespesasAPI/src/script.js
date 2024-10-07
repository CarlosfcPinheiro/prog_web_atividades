// Getting the elements
const input_descricao = document.getElementById('input-descricao');
const input_valor = document.getElementById('input-valor');
const submit_despesa = document.getElementById('submit-despesa');

// Configs
const url = 'https://parseapi.back4app.com/classes/Despesas';

// Main function ==================
async function mainFunction(){
    try{
        await loadDespesas(url);
    } catch(err){
        throw new Error(err);
    }
    // Click event add 'despesa'
    submit_despesa.addEventListener('click', () => {
        const descricao = input_descricao.value;
        const valor = Number(input_valor.value);

        try{
            (async function(){
                await postDespesa(url, descricao, valor);
                location.reload();
            })();
        } catch(err){
            throw new Error(err);
        }
    });
}

// Load despesas
const loadDespesas = async(url) => {
    // Call GET request
    const despesasData = await getRequest(url);
    // loop to create all 'despesas'
    despesasData.forEach((despesa) => {
        const objectId = despesa.objectId;
        const descricao = despesa.descricao;
        const valor = despesa.valor;
        // Creating 'despesa' elements
        createElements(descricao, valor, objectId);
    });
}

// Requests ==================

// GET request
const getRequest = async(url) => {
    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': 'GZtWVlIIfdvSS2MOlDVleERXdn96mg1An1wrgGWy',
            'X-Parse-REST-API-Key': 'RCJqIyCphMIIEprwgPqicixMIY9zaTUIzBgbvivv'
        }
    });

    const dataJson = await rawResponse.json();
    const despesasData = dataJson.results;
    
    return despesasData;
}

// PUT request
const putRequest = async(url, id, new_descricao, new_valor) => {
    await fetch((`${url}/${id}`), {
        method: 'PUT',
        headers: {
            'X-Parse-Application-Id': 'GZtWVlIIfdvSS2MOlDVleERXdn96mg1An1wrgGWy',
            'X-Parse-REST-API-Key': 'RCJqIyCphMIIEprwgPqicixMIY9zaTUIzBgbvivv',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            descricao: new_descricao,
            valor: new_valor
        })
    });
}

// DELETE request
const deleteRequest = async(url, id) => {
    await fetch((`${url}/${id}`), {
        method: 'DELETE',
        headers: {
            'X-Parse-Application-Id': 'GZtWVlIIfdvSS2MOlDVleERXdn96mg1An1wrgGWy',
            'X-Parse-REST-API-Key': 'RCJqIyCphMIIEprwgPqicixMIY9zaTUIzBgbvivv'
        },
        body: JSON.stringify({})
    });
}

// POST request
const postDespesa = async(url, input_descricao, input_valor) => {
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'GZtWVlIIfdvSS2MOlDVleERXdn96mg1An1wrgGWy',
            'X-Parse-REST-API-Key': 'RCJqIyCphMIIEprwgPqicixMIY9zaTUIzBgbvivv',
            'Content-Type': 'application/json'
        },
        // Just allows in string data type
        body: JSON.stringify({
            descricao: input_descricao,
            valor: input_valor
        })
    });

    console.log(rawResponse);
}

// Call main function
mainFunction();