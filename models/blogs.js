const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  entry: {type: String}
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
