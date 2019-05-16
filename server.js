var express = require('express');
var app = express();
// var mysql = require('mysql');
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// var connection = require('./config/connection');

// app.get('/', function (req, res) {
//     connection.query('SELECT * FROM burgers', function (err, data) {
//         if (err) throw err;

//         res.render('index', {
//             burgers: data
//         });
//     });
// });

// app.post('/', function (req, res) {
//     connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [req.body.burger, 0], function (err, data) {
//         if (err) throw err;
//         res.redirect('/');
//     });
// });
var routes = require('./controllers/burgers_controller');
var routeHome = require('./controllers/burgers_controller');

app.get('/', function (req, res) {
    routeHome(req, res);
});

app.use(routes);

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});