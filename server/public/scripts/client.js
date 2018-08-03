console.log('script sourced');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq');
    $('#garden-form').on('submit', sendDataToServer);
    // Do initial GET request to populate data
    // getDataFromServer();
}

function sendDataToServer(event) {
    // Stop page from refreshing when submitting a form
    event.preventDefault();

    console.log('sendDataToServer');
    const plantName = $('#plant-name').val();
    const plantQty = $('#plant-qty').val();
    const notesForPlants = $('#plant-notes').val();
    const dataToSend = {name: plantName, qty: plantQty, inStock: '' , notes: notesForPlants};
    // Send plant to the server
    $.ajax({
        method: 'POST',
        url: '/plant',
        data: dataToSend
    }).then(function(response) {
        console.log('success', response);
        getDataFromServer();
        clearForm();  
    }).catch(function(error) {
        console.log('error', error);
        alert('there was a problem ');
    });
}

// Clear out all inputs from the form
function clearForm() {
    $('#garden-form input').val('');
}

function getDataFromServer() {
    console.log('getDataFromServer');
    // GET all plants from the server
    $.ajax({
        method: 'GET',
        url: '/plant'
    }).then(function (response) {
        console.log('success', response);
        const dataFromServer = response;
        displayPlantsOnDOM(dataFromServer);
    }).catch(function (error) {
        console.log('error', error);
        alert('there was a problem posting data');
    });
}

function displayPlantsOnDOM(plants) {
    // Clear the table body
    $('#plant-content').empty();

    // Append each plant returned from the server
    for(const plant of plants) {
        // Create a table row (not yet on the DOM)
        const row = $('<tr></tr>');
        // Append table data to that row
        row.append('<td>' + plant.name + '</td>');
        row.append('<td>' + plant.qty + '</td>');
        row.append('<td>' + plant.inStock + '</td>');
        row.append('<td>' + plant.notes + '</td>');
        // Append the new table row to the DOM
        $('#plant-content').append(row);
    }
}