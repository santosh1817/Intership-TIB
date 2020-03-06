const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { Activity } = require('../models/Activity');

//http://localhost:5000/users
router.get('/', function(req, res) {
  Activity.find()
    .then(function(activities) {
      res.send(activities);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post('/add', function(req, res) {
    const body = req.body;
    const activity = new Activity(body);
  
    activity.save()
      .then(function(activity) {
        res.send(activity);
      })
      .catch(function(err) {
        res.send(err);
      });
  });

 

module.exports = {
  activitiesRouter: router
};
