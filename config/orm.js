var connection = require('./connection');

// create the following methods:
// selectAll
// insertOne
// updateOne
var orm = {
    selectAll: function () {
        connection.query('SELECT * FROM burgers', function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    },
    insertOne: function (NewBurgerName, isDevoured) {
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [NewBurgerName, isDevoured], function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    },
    updateOne: function () {
        connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', )
    }
};

// exporting 'orm' for use in the burger.js file.
module.exports = orm;