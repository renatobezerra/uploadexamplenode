'use strict'
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.port || 3000;

// Enable node receive json data.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(port, (a) => {
    console.log('Servidor está no ar');
});