'use strict'
const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require('./config/multer');

routes.get('/', (req, res) =>{
    res.status(200).send('Hello World');
});

// Between route param and callback function, is possible to declare any middlewares, like:
//      routes.posts("/xpto", middleware1, middleware2, ..., callback);
routes.post("/posts", multer(multerConfig).single('file') , (req, res) => {
    console.log(req.file);
    return res.json({hello: 'World'});
});

module.exports = routes;