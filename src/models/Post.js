'use strict'

const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdBy: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);
