var orm = require('../config/orm');

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = $(function () {
    $('#create-form').on('submit', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/',
            method: 'POST',
            data: $('#burger-name').val().trim()
        }).then(function () {
            console.log('Added new burger!');
            location.reload();
        });
    });

    $('#devour-btn').on('click', function (event) {
        $.ajax({
            url: '/',
            method: 'PUT',
            data: $(this).data('id')
        }).then(function () {
            console.log('You devoured that burger!');
            location.reload();
        });
    });
});

// Exporting 'burger' for use in the controller.js file.
module.exports = burger;