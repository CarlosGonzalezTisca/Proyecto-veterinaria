var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

const usuariobd="Admini";
const passbd="12345";
const bd="veterinaria";

mongoose.connect('mongodb+srv://'+usuariobd+':'+passbd+'@cluster0-6kxlk.mongodb.net/'+bd+'?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

require('./models/usuario');
require('./models/cliente');
require('./models/empleado');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuario');
var clienteRouter = require('./routes/cliente');
var empleadoRouter = require('./routes/empleado');
const cors=require('cors');
var app = express();
app.use(cors({"origin": "http://localhost:4200",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 204})); 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usersRouter);
app.use('/cliente', clienteRouter);
app.use('/empleado', empleadoRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
