var orm = require('../config/orm');

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = $(function () {
    $('#create-form').on('submit', function (event) {
        event.preventDefault();

        $.ajax('/', {
            type: 'POST',
            data: $('#burger-name').val().trim()
        }).then(function () {
            console.log('Added new burger!');
            location.reload();
        });
    });
})

// Exporting 'burger' for use in the controller.js file.
module.exports = burger;