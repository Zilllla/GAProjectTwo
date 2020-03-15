const express = require('express');
const router = express.Router();
const Film = require('../models/films.js');
const Blog = require('../models/blogs.js');


router.get('/seed', (req, res) => {
  Film.create(
    [
      {
        name: 'Some Like It Hot',
        year: 1959,
        director: 'idk'
      },
      {
        name: 'Arsenic and Old Lace',
        year: 1949,
        director: 'idk'
      },
      {
        name: 'Psycho',
        year: 1964,
        director: 'Alfred Hitchcock'
      }
    ],
    (err, data) => {
      res.redirect('/films');
    }
  )
});

//NEW
app.get('/new', (req, res) => {
  Film.find({}, (error, allFilms) => {
    res.render('new.ejs', {films:allFilms});
  });
});

//INDEX
app.get('/', (req, res) => {
  Film.find({}, (error, allFilms) => {
    res.render('index.ejs', {films:allFilms});
  });
});

//CREATE
app.post('/:id', (req, res) => {
  Film.create(req.body, (error, createdEntry) => {
    res.redirect('/films/');
  });
});

//SHOW
app.get('/:id', (req, res) => {
  Film.findById(req.params.id, (err, foundFilm) => {
    res.render('show.ejs', {films:foundFilm})
  });
});

module.exports = router;
