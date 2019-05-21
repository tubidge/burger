var express = require('express');
// import burger.js once I figure out what to name the variable.
//  // Create the 'router' for the app, then export it.

var router = express.Router();
var connection = require('../config/connection');


router.get('/', function (req, res) {
    connection.query('SELECT * FROM burgers', function (err, data) {
        if (err) throw err;

        res.render('index', {
            burgers: data
        });
    });
});

router.post('/', function (req, res) {
    connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [req.body.burger, 0], function (err, data) {
        if (err) throw err;
        res.redirect('/');
    });
});

// route to update a row in database
router.put('/', function (req, res) {
    connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [1, req.body.id], function (err, data) {
        if (err) throw err;
        res.redirect('/');
    });
});

// Exporting 'router' for use in the server.js file.
module.exports = router;