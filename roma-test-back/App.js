const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const app = express();

app.use(cookieParser());
app.use(passport.initialize());
app.use(bodyParser.json());

const user = require('./routes/user');
const mainPage = require('./routes/mainPage');
const registration = require('./routes/registration');
const location = require('./routes/location');

app.use('/', require('./middleware/handlerCatch'));

app.use('/', mainPage);
app.use('/users', user);
app.use('/register', registration);
app.use('/location', location);

// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json

module.exports = app;
