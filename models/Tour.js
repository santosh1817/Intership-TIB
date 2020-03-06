const mongoose = require('mongoose');
const MUUID = require('uuid-mongodb');
const mongooseHistory = require('mongoose-history');
const { History } = require('../models/History');

//const historySchema = require('mongoose').model('History').schema

const Schema = mongoose.Schema;

const tourSchema = new Schema({
  uuid: {
    type: 'object',
    value: { type: 'Buffer' },
    default: () => MUUID.v1()
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  places: {
    type: [String],
    required: false,
    unique: false
  },
  numberOfDays: {
    type: Number
  },
  itinerary: [],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: new Date('1987-10-26')
  }
});


//save pre hook
// tourSchema.pre('save', function(next) {
//   console.log('inside pre hooks');
//   const tour = this;
//   const history = new History(tour);
//   history.save();

//   if (tour.isNew) {
//     //      history.save()
//     next();
//   } else {
//     console.log(history.updatedAt);

//     //     next();
//   }
// });


//update pre hook
// tourSchema.pre('update', function(next) {
//   //console.log('inside pre hooks')
//   const tour = this;
//   const history = new History(tour);

//   history.update({}, { updatedAt: new Date('2020-10-26') });
//   next();
// });

var options = {customCollectionName: "histories"}
tourSchema.plugin(mongooseHistory,options)
const Tour = mongoose.model('Tour', tourSchema);

module.exports = {
  Tour
};
