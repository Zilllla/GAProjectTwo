const express = require('express');
const router = express.Router();
const Review = require('../models/reviews.js');

//NEW
router.get('/new', (req, res) => {
  res.render('reviews/new.ejs');
});

//INDEX
router.get('/', (req, res) => {
  Review.find({}, (err, allReviews) => {
    res.render('reviews/index.ejs', {
      reviews:allReviews
    });
  });
});

//CREATE
router.post('/', (req, res) => {
  Review.create(req.body, (err, createdReview) => {
    res.redirect('/reviews');
  });
});

//SHOW
router.get('/:id', (req, res) => {
  Review.findById(req.params.id, (err, foundReview) => {
    res.render('reviews/show.ejs', {
      reviews:foundReview
    });
  });
});

//EDIT
router.get('/:id/edit', (req, res) => {
  Review.findById(req.params.id, (err, foundReview) => {
    res.render('reviews/edit.ejs', {
      reviews:foundReview
    });
  });
});

//PUT
router.put('/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect('/reviews');
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  Review.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/reviews');
  });
});

module.exports = router;
