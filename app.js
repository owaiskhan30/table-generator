var table_value = document.querySelector("#table_number");
var table_output = document.querySelector("#table_output tbody");

function createTable() {
    table_output.innerHTML = "";

    if (table_value.value <= 0 || table_value.value === "") {
        alert("Fill the field with a valid number.");
        return;
    }

    for (table = 1; table <= 10; table++) { 
        var table_multiply = table_value.value * table;
        table_output.innerHTML += `<tr>
        <td>${table_value.value}</td>
        <td>x</td>
        <td>${table}</td>
        <td>=</td>
        <td>${table_multiply}</td>
        </tr>`;
    }
}
