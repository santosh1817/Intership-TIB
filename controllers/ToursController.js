const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Tour } = require('../models/Tour');

//http://localhost:5000
router.get('/', function(req, res) {
  Tour.find()
    .then(function(tours) {
      res.send(tours);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post('/add', function(req, res) {
    const body = req.body;
    const tour = new Tour(body);
  
    tour.save()
      .then(function(tour) {
        res.send(tour)
      })
      .catch(function(err) {
        res.send(err);
      });
  });


  router.put('/update/:name', function(req, res) {
    const body = _.pick(req.body, [
      'name',
      'places',
      'numberOfDays',
      'itinerary'
    ]);
    Tour.findOneAndUpdate({ name: req.params.name }, body, {
      new: true,
      runValidators: false
    })
      .then(function(users) {
        res.send({ users, notice: 'this tour got updated successfully' });
      })
      .catch(function(err) {
        res.send(err);
      });
  });

  

module.exports = {
  toursRouter: router
};
