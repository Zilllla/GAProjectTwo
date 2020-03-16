const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  title: String,
  entry: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
