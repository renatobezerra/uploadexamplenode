'use strict'
const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.get('/', (req, res) =>{
  res.status(200).send('Hello World');
});

// Between route param and callback function, is possible to declare any middlewares, like:
//  routes.posts("/xpto", middleware1, middleware2, ..., callback);
routes.post("/posts", multer(multerConfig).single('file') , async (req, res) => {
  const {originalname: name, size, key, location: url = ''} = req.file;
  const post = await Post.create({
    name,
    size,
    key,
    url
  });

  return res.json(post);
});

module.exports = routes;
