const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');
const productsRouter = require('./routes/products');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://groupbocal:bocal2020@projetbackend.hyr4w.mongodb.net/jashoppan?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/products', productsRouter);

module.exports = app;