const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  name: {type: String},
  year: {type: Number},
  director: {type: String}
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;
