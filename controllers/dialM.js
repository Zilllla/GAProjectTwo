const express = require('express');
const router = express.Router();
const Review = require('../models/reviews.js');

//SHOW
router.get('/', (req, res) => {
  Review.find({}, (err, allReviews) => {
    res.render('dialM/show.ejs', {reviews:allReviews})
  });
});

//NEW
router.get('/new', (req, res) => {
  res.render('dialM/new.ejs')
});

//CREATE
router.post('/', (req, res) => {
  Review.create(req.body, (error, createdReview) => {
    res.redirect('dialM/show.ejs')
  });
});



module.exports = router;
