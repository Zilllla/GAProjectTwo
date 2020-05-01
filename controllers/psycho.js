const express = require('express');
const router = express.Router();
const Review = require('../models/reviews.js');

//SHOW
router.get('/', (req, res) => {
  Review.find({}, (err, allReviews) => {
    res.render('psycho/show.ejs', {reviews:allReviews})
  });
});

//NEW
router.get('/new', (req, res) => {
  res.render('psycho/new.ejs')
});

//CREATE
router.post('/', (req, res) => {
  Review.create(req.body, (error, createdReview) => {
    res.redirect('psycho/')
  });
});

//EDIT
router.get('/:id/edit', (req, res) => {
  Review.findById(req.params.id, (err, foundReview) => {
    res.render('psycho/edit.ejs', {reviews:foundReview})
  });
});

//PUT
router.put('/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedReview) => {
    res.redirect('/psycho')
  });
});

router.delete('/:id', (req, res) => {
  Review.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect('/psycho')
  });
});

module.exports = router;
