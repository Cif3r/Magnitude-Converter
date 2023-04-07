const list_elements = document.getElementById('cards');
load_data()





function load_data() {
    for (const [key, value] of Object.entries(magnitudes)) {
        form_generate(value.info_cad.name, value.Select_options);
    }
}

//Creation-manipulate DOM
function form_generate(titulo, unids) {
    const div = document.querySelector("#cards");
    const form = document.createElement("form");
    form.setAttribute('class','basic_card')

    const card = `
        <h2>${titulo}</h2>
        <label>Convertir de:</label>
        <input class="input_presion" id="${titulo}" onkeypress = "return(event.charCode >= 48 && event.charCode <= 57) || event.charCode == 44 || event.charCode == 46">
        <select id="${titulo}I" ></select>
        <label>A:</label>
        <select id="${titulo}O" ></select>
        <div id="${titulo}" class ="results">
            <img id="${titulo}" src="/IMG/change.png" alt="icon_change">
            <spam class="Result_0">0</spam>
        </div>
    `;
    form.innerHTML = card;
    div.appendChild(form);

    const fragment_to = document.createDocumentFragment();
    const fragment_from = document.createDocumentFragment();

    for (const [key, value] of Object.entries(unids)) {
        const option_to = document.createElement("option");
        const option_from = document.createElement("option");
        option_to.value = key;
        option_to.text = value;
        option_from.value = key;
        option_from.text = value;
        fragment_to.appendChild(option_to);
        fragment_from.appendChild(option_from);
    }

    const unid_input = document.querySelector(`#${titulo}I`);
    const unid_ouput = document.querySelector(`#${titulo}O`);
    unid_input.appendChild(fragment_to);
    unid_ouput.appendChild(fragment_from);

    //selected default 

    unid_input.options[1].selected = true;
    unid_ouput.options[3].selected = true;

}

//evalation of cards states 
function data_evaluation(key_id_data, toggle_I_O) {

    const value_input = document.querySelector(`input#${key_id_data}`);
    const Option_key_I = document.querySelector(`select#${key_id_data}I`);
    const Option_key_O = document.querySelector(`select#${key_id_data}O`);

    if (toggle_I_O == "C") {
        const input_unit = Option_key_I.value
        const output_unit = Option_key_O.value
        Option_key_I.value = output_unit
        Option_key_O.value = input_unit
    }

    console.log(value_input.value);

    scan_in_database(key_id_data, value_input.value, Option_key_I.value, Option_key_O.value);
}

//get data info for element in the card
function scan_in_database(key_id_data, value_input, Option_key_I, Option_key_O) {
    let magnitudes_const = {};
    let print_result = document.querySelector(`#${key_id_data}.results spam`)
    magnitudes_const = magnitudes[key_id_data].constant_data[Option_key_I];

    let result = value_input * magnitudes_const[Option_key_O];
    print_result.innerHTML = `${format_number(result)} ${Option_key_O}`
}

//funtcion for format number to print in doom
function format_number(Number_to_Converter) {
    const string_value = Number_to_Converter.toString().split('.');
    const unidades = string_value[0].length;
    const decimales = string_value[1] ? string_value[1].length : 0;
    const split_expo = Number_to_Converter.toExponential(6);

    if (unidades > 9 || decimales > 8) {

        const salida_1 = `${split_expo.replace('e', ' ×10').replace('+', '')}`;
        const part = salida_1.split('×10');
        return (salida_1.replace(`×10${parseInt(part[1])}`, `×10<sup>${parseInt(part[1])}</sup>`));
    }
    if (unidades <= 9 && decimales <= 9) {
        return `${Number_to_Converter}`;
    }
}

//List evets for execution
list_elements.addEventListener('keyup', (e) => {
    if (e.target.tagName == 'SELECT' || e.target.tagName == 'INPUT') {
        const id = e.target.id;
        data_evaluation(id, 'null');
    }

});

list_elements.addEventListener('click', (e) => {
    if (e.target.tagName == 'IMG') {
        const id = e.target.id;
        data_evaluation(id, 'C');
    }
});

list_elements.addEventListener('change', (e) => {
    if (e.target.tagName == 'SELECT') {
        const id = e.target.id;
        data_evaluation(id.replace('I','').replace('O',''), 'null');
    }
});
