var express = require('express');
var app = express();
var mysql = require('mysql');
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

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'R0otsNh0ots9',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) {
        console.log(`Error connectin: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

app.get('/', function (req, res) {
    connection.query('SELECT * FROM burgers', function (err, data) {
        if (err) throw err;

        res.render('index', {
            burgers: data
        });
    });
});

app.post('/', function (req, res) {
    connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [req.body.burger, 0], function (err, data) {
        if (err) throw err;
        res.redirect('/');
    });
});


app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});