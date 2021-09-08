const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPosts = new Schema({
  author: String,
  title: String,
  description: String,
  date: String,
  tagName: String,
  bookmark: false,
  image: String, 
});

module.exports = mongoose.model('home_posts', BlogPosts);