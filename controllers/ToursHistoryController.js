const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { TourHistory } = require('../models/History');

//http://localhost:5000
router.get('/', function(req, res) {
  TourHistory.find()
    .then(function(tours) {
      res.send(tours);
    })
    .catch(function(err) {
      res.send(err);
    });
});


module.exports = {
  toursHistoryRouter: router
};
