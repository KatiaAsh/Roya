const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const controllers = require('./controllers/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main'
}));

// for parsing application/json
app.use(bodyParser.json());

app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(controllers);

module.exports = app;
