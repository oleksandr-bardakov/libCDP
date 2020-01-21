const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const { jwtToken } = require('./passport.js');

const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const adminBooksRouter = require('./routes/booksAdministration');
const filtersRouter = require('./routes/filters');
const paymentsRouter = require('./routes/payments');

const app = express();
//validator
const expressValidator = require('express-validator');
app.use(expressValidator())

passport.use(jwtToken);
app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(__dirname + "/public"));

app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/admin/users/', passport.authenticate('jwt', { session: false }), usersRouter);
app.use('/books/', passport.authenticate('jwt', { session: false }), booksRouter);
app.use('/admin/books/', passport.authenticate('jwt', { session: false }), adminBooksRouter);
app.use('/admin/payments/', passport.authenticate('jwt', { session: false }), paymentsRouter);
app.use('/filters', filtersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
